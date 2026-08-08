import subprocess
import re
import sys
import time

# Ensure UTF-8 output encoding for Windows CP1251 console compatibility
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

print("Starting Cloudflare Tunnel for http://localhost:3000...")
sys.stdout.flush()

cmd = ["cloudflared.exe", "tunnel", "--url", "http://localhost:3000"]

try:
    process = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace"
    )

    for line in process.stdout:
        print(line, end="")
        sys.stdout.flush()
        if "trycloudflare.com" in line:
            match = re.search(r'https://[a-zA-Z0-9-]+\.trycloudflare\.com', line)
            if match:
                url = match.group(0)
                print("\n" + "="*60)
                print(f"🌟 CLOUDFLARE PUBLIC TUNNEL LIVE AT: {url}")
                print("="*60 + "\n")
                sys.stdout.flush()
except Exception as e:
    print(f"Error launching cloudflared: {e}")
    sys.stdout.flush()
