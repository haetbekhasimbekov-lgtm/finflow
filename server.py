import http.server
import socket
import sys
import os
import json
import sqlite3

# Ensure UTF-8 output encoding for Windows CP1251 console compatibility
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 3000
DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)
DB_FILE = os.path.join(DIR, "finflow_database.db")

def init_database():
    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS app_state (
            id INTEGER PRIMARY KEY,
            data TEXT NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        conn.commit()
        conn.close()
    except Exception as e:
        print("Database initialization error:", e)

def get_db_data():
    if not os.path.exists(DB_FILE):
        return None
    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute("SELECT data FROM app_state WHERE id = 1")
        row = c.fetchone()
        conn.close()
        return row[0] if row else None
    except Exception as e:
        print("DB read error:", e)
        return None

def save_db_data(json_str):
    try:
        conn = sqlite3.connect(DB_FILE)
        c = conn.cursor()
        c.execute("INSERT OR REPLACE INTO app_state (id, data, updated_at) VALUES (1, ?, CURRENT_TIMESTAMP)", (json_str,))
        conn.commit()
        conn.close()
        return True
    except Exception as e:
        print("DB save error:", e)
        return False

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        if self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            db_data = get_db_data()
            if db_data:
                self.wfile.write(db_data.encode('utf-8'))
            else:
                self.wfile.write(json.dumps({"status": "empty"}).encode('utf-8'))
            return
        super().do_GET()

    def do_POST(self):
        if self.path == '/api/data':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                decoded = post_data.decode('utf-8')
                save_db_data(decoded)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
            return
        super().do_POST()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return '127.0.0.1'

if __name__ == '__main__':
    init_database()
    local_ip = get_local_ip()
    server = http.server.ThreadingHTTPServer(("", PORT), NoCacheHTTPRequestHandler)
    print("=" * 60)
    print(">>> FinFlow Mobile Server Started Successfully!")
    print(f">>> Desktop Link:  http://localhost:{PORT}")
    print(f">>> Mobile Link:   http://{local_ip}:{PORT}")
    print("=" * 60)
    sys.stdout.flush()
    server.serve_forever()
