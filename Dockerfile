FROM node:latest

WORKDIR /app

COPY . /app/

RUN npm install

ENV NODE_ENV "production"
ENV PORT "80"
ENV BACK_HOST "api.ramp-up.sagudeloo.com"

EXPOSE 80

CMD [ "npm", "start" ]