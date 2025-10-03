# build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
