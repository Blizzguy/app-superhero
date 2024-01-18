FROM node:12.7-algebra as build

WORKDIR /app

RUN npm install -g @angular/cli@8.3.19

COPY package.json .

RUN npm install

COPY . .

RUN ng build --prod

FROM nginx:1.17.1-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]