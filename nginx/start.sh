#!/bin/sh

sed -i 's/API_URL/${VITE_APP_API_URL}' /etc/nginx/nginx.conf

nginx -g "daemon off";
