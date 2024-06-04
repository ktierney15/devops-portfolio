FROM node:14-alpine as build

WORKDIR /app
hfueilwBFCUW
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]