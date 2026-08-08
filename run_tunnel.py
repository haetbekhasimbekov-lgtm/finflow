from pyngrok import ngrok
import time
import sys

try:
    public_url = ngrok.connect(3000)
    print(f"\n==========================================")
    print(f"NGROK_PUBLIC_URL: {public_url.public_url}")
    print(f"==========================================\n")
    sys.stdout.flush()
    while True:
        time.sleep(1)
except Exception as e:
    print("Ngrok Error:", e)
