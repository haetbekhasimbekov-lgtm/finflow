import subprocess
import json
import time
import os

# Create HTML test file
test_html = """<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
<script src="app.js"></script>
</body>
</html>
"""

with open("c:/Users/User/Desktop/Мобылный прложеня/test_err.html", "w", encoding="utf-8") as f:
    f.write(test_html)

print("Created test_err.html")
