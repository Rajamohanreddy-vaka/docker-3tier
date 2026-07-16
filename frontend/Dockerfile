FROM nginx:stable-alpine3.23-perl
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY script.js index.html /usr/share/nginx/html/
