import http.server
import socketserver
import threading
import subprocess
import socket
import sys
import os
import re
import time
import json

# Force UTF-8 output encoding for Windows compatibility
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 3000
DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)

GLOBAL_CF_URL = None

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/tunnel':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            ip = get_local_ip()
            data = json.dumps({
                "cloud_url": GLOBAL_CF_URL,
                "local_ip": ip,
                "port": PORT
            })
            self.wfile.write(data.encode('utf-8'))
            return
        super().do_GET()

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

def start_server():
    server = http.server.ThreadingHTTPServer(("", PORT), NoCacheHTTPRequestHandler)
    server.serve_forever()

if __name__ == '__main__':
    # 1. Start HTTP Server in background thread
    t = threading.Thread(target=start_server, daemon=True)
    t.start()
    time.sleep(1)

    local_ip = get_local_ip()

    # 2. Start Cloudflare Tunnel
    cmd = ["cloudflared.exe", "tunnel", "--protocol", "http2", "--url", f"http://127.0.0.1:{PORT}"]
    
    cf_url = None
    log_file = os.path.join(DIR, "cf_out.log")
    
    with open(log_file, "w", encoding="utf-8") as f:
        proc = subprocess.Popen(
            cmd,
            stdout=f,
            stderr=subprocess.STDOUT,
            text=True
        )

    print("=" * 65)
    print("🚀 FINFLOW SHAXSIY MOLIYA ILOVASI TAVSIFI VA ULANISH MANZILLARI 🚀")
    print("=" * 65)
    print(f"💻 Компьютер учун local манзил:     http://localhost:{PORT}")
    print(f"📶 Wi-Fi тармоғидаги телефон учун:   http://{local_ip}:{PORT}")
    
    print("\n⏳ Cloudflare орқали дунёнинг хоҳлаган жойидан очиш учун HTTPS линк олинмоқда...")
    
    for _ in range(20):
        time.sleep(1)
        if os.path.exists(log_file):
            with open(log_file, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                match = re.search(r'https://[a-zA-Z0-9-]+\.trycloudflare\.com', content)
                if match:
                    cf_url = match.group(0)
                    GLOBAL_CF_URL = cf_url
                    break
    
    print("=" * 65)
    if cf_url:
        print(f"🌐 ТЕЛЕФОН ВА ҲАР ҚАНДАЙ КУРИЛМА УЧУН HTTPS ССЫЛКА:")
        print(f"👉 {cf_url}")
    else:
        print("⚠️ Cloudflare линки олишда кутиш вақти тугади. Local Wi-Fi линкидан фойдаланинг.")
    print("=" * 65)
    sys.stdout.flush()

    try:
        proc.wait()
    except KeyboardInterrupt:
        print("\nСервер тўхтатилди.")
