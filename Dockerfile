FROM node:14-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# production environment
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

HEALTHCHECK CMD curl --fail http://localhost:8080 || exit 1

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]