#!/bin/bash
# 物販サイトをローカルサーバー + Google Chrome で開く
SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT=8081
URL="http://127.0.0.1:${PORT}/index.html"

if curl -s -o /dev/null -w '' "http://127.0.0.1:${PORT}/" 2>/dev/null; then
  PID=""
  echo "サーバーは既に起動しています"
else
  echo "サーバー起動: $SITE_DIR ($PORT)"
  (cd "$SITE_DIR" && python3 -m http.server "$PORT") &
  PID=$!
  sleep 0.5
fi

echo "物販サイト: $URL"

if [ -d "/Applications/Google Chrome.app" ]; then
  open -a "Google Chrome" "$URL"
else
  open "$URL"
fi

if [ -n "$PID" ]; then
  echo "停止: Ctrl+C"
  wait "$PID"
fi
