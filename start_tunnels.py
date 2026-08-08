import subprocess
import re
import sys
import time
import os

if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

print("=== Launching Mobile Tunnels ===")
sys.stdout.flush()

# Start cloudflared writing to log file
with open("cf_out.log", "w", encoding="utf-8") as f:
    cf_proc = subprocess.Popen(
        ["cloudflared.exe", "tunnel", "--protocol", "http2", "--url", "http://127.0.0.1:3000"],
        stdout=f,
        stderr=subprocess.STDOUT,
        text=True
    )

print("Cloudflare process launched (PID %d)" % cf_proc.pid)
sys.stdout.flush()

cf_url = None
for i in range(15):
    time.sleep(1)
    if os.path.exists("cf_out.log"):
        with open("cf_out.log", "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            if "trycloudflare.com" in content:
                match = re.search(r'https://[a-zA-Z0-9-]+\.trycloudflare\.com', content)
                if match:
                    cf_url = match.group(0)
                    print("\n============================================================")
                    print("🌟 ACTIVE CLOUDFLARE URL FOR MOBILE: %s" % cf_url)
                    print("============================================================\n")
                    sys.stdout.flush()
                    break

# Also start localhost.run tunnel to log file
with open("lhr_out.log", "w", encoding="utf-8") as f:
    lhr_proc = subprocess.Popen(
        ["ssh", "-o", "StrictHostKeyChecking=no", "-o", "ServerAliveInterval=15", "-R", "80:127.0.0.1:3000", "nokey@localhost.run"],
        stdout=f,
        stderr=subprocess.STDOUT,
        text=True
    )

lhr_url = None
for i in range(10):
    time.sleep(1)
    if os.path.exists("lhr_out.log"):
        with open("lhr_out.log", "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
            if "lhr.life" in content:
                match = re.search(r'https://[a-zA-Z0-9-]+\.lhr\.life', content)
                if match:
                    lhr_url = match.group(0)
                    print("\n============================================================")
                    print("📱 ACTIVE LOCALHOST.RUN URL FOR MOBILE: %s" % lhr_url)
                    print("============================================================\n")
                    sys.stdout.flush()
                    break

while True:
    time.sleep(10)
