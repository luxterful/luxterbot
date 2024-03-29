# botfriends coding challenge

###### by Lukas Bauer

This project is part of the coding challenge for botfriends.

![preview](https://github.com/luxterful/luxterbot/blob/main/docs/preview.png?raw=true)

Demo is available at [https://bot.luxterful.eu](https://bot.luxterful.eu). You can use following data as configuration:

> webhookUrl: **https://service-2.bot.luxterful.eu/webhook**

> webhookSecret: **5ierh7Kay6MoKxx7QclbBq7I**

## Run project locally

Install dependencies

```
$ npm install
```

Edit .env file and change `VUE_APP_SERVICE_1_URL` to `http://localhost:8081`

Load all environment variables

```
$ export $(cat .env | xargs)
$ export DATABASE_STRING=mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/
```

Start the local database

```
$ docker-compose -f database/docker-compose.yml up -d
```

Start the services

```
$ npm run serve
```

Access http://localhost:8080

## How to run the project in production

This project uses traefik as an revere proxy to route traffic through the same domain. First start Traefik.

```
$ docker network create shared
$ docker-compose -f ./reverseProxy/docker-compose.yml up -d
```

Then start the main project:

```
$ docker-compose up -d
```

## Things that are missing

- Input data validation for POST/PUT requests
- Automated testing of functionality
- POST /messages endpoint of service 1 as webSocket endpoint

## Presentation slide

The presentation slides can be found [here](https://github.com/luxterful/luxterbot/blob/main/docs/presentation.pdf?raw=true)
