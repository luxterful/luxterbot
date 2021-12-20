FROM node:16

WORKDIR /app

COPY package*.json .
COPY packages/service-2 packages/service-2

RUN npm install
RUN npm run -w service-2 build

EXPOSE 8082

CMD npm run -w service-2 start