#!/bin/sh

sed -i 's|API-URL|'"${VITE_APP_API_URL}"'|' /etc/nginx/nginx.conf

nginx -g "daemon off;"
