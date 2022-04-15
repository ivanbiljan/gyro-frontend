FROM node:16.13.0 AS builder
WORKDIR /usr/src/app
COPY . ./
RUN npm install -f
RUN npm run prod

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/dist .
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]