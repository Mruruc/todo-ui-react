#!/bin/sh

echo $VITE_APP_API_URL
# Replace the placeholder API_URL with the environment variable value
sed -i 's|API-URL|'echo $VITE_APP_API_URL'|' /etc/nginx/nginx.conf

# Start NGINX
nginx -g "daemon off;"
