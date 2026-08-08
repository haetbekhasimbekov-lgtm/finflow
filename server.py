import http.server
import socket
import sys

# Ensure UTF-8 output encoding for Windows CP1251 console compatibility
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

PORT = 3000

class NoCacheHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
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
    local_ip = get_local_ip()
    server = http.server.ThreadingHTTPServer(("", PORT), NoCacheHTTPRequestHandler)
    print("=" * 60)
    print(">>> FinFlow Mobile Server Started Successfully!")
    print(f">>> Desktop Link:  http://localhost:{PORT}")
    print(f">>> Mobile Link:   http://{local_ip}:{PORT}")
    print("=" * 60)
    sys.stdout.flush()
    server.serve_forever()
