FROM node:20 as build-stage
WORKDIR /app
COPY  package*.json  ./
COPY . .
RUN npm install
ARG VITE_APP_API_URL
ENV VITE_APP_API_URL=${VITE_APP_API_URL}
RUN npm run build --prod


FROM nginx:alpine as deployment
ARG VITE_APP_API_URL
ENV VITE_APP_API_URL=${VITE_APP_API_URL}
COPY ../nginx/nginx.conf /etc/nginx/nginx.conf
COPY ../nginx/start.sh /start.sh
RUN chmod +x /start.sh
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD /start.sh