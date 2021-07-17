FROM node:erbium-alpine3.14 as build
WORKDIR angular-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.21.1
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build angular-app/dist/meal-planner-fe /usr/share/nginx/html
