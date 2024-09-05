#!/bin/sh

echo "VITE_APP_API_URL is set to: $VITE_APP_API_URL"

sed -i 's|API-URL|'"${VITE_APP_API_URL}"'|' /etc/nginx/nginx.conf

nginx -g "daemon off;"
