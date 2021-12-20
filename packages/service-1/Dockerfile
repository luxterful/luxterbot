FROM node:16

WORKDIR /app

COPY package*.json .
COPY packages/service-1 packages/service-1

RUN npm install
RUN npm run -w service-1 build

EXPOSE 8081

CMD npm run -w service-1 start