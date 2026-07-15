FROM nginx:stable-alpine3.23-perl
RUN rm -rf /usr/share/nginx/html/*
RUN rm  /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY script.js /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
