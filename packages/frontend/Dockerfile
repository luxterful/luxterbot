FROM node:15.14 as build-stage
WORKDIR /app
COPY package*.json ./
COPY packages/frontend/ ./packages/frontend/
COPY packages/service-1/ ./packages/service-1/
RUN npm install
# set VUE_APP_SERVICE_1_URL because it is needed at buildtime
ARG VUE_APP_SERVICE_1_URL
ENV VUE_APP_SERVICE_1_URL $VUE_APP_SERVICE_1_URL
RUN npm run -w service-1 build:client
RUN npm run -w frontend build


FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/packages/frontend/dist /app
COPY packages/frontend/nginx/nginx.conf /etc/nginx/nginx.conf