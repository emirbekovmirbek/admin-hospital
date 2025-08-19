FROM node:22-alpine  AS builder
ENV http_proxy=http://10.230.143.15:3128
ENV https_proxy=http://10.230.143.15:3128
WORKDIR /front
COPY . /front

RUN npm config set proxy $http_proxy && \
        npm config set https-proxy $https_proxy && \
        npm install @rollup/rollup-linux-x64-musl && npm install

RUN npm run build



FROM nginx
RUN cp /usr/share/zoneinfo/Asia/Bishkek /etc/localtime
COPY --from=builder /front/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf