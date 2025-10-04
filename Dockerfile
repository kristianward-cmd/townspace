FROM nginx:1.29.1-alpine
COPY default.conf /etc/nginx/conf.d/default.conf
COPY out/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
