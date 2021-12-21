# botfriends coding challenge

###### by Lukas Bauer

This project is part of the coding challenge for botfriends.

Demo is available at [https://bot.luxterful.eu](https://bot.luxterful.eu). You can use following data as configuration:

> webhookUrl: **https://service-2.bot.luxterful.eu/webhook**

> webhookSecret: **5ierh7Kay6MoKxx7QclbBq7I**

## Run project locally

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

Start the three projects

```
$ npm run serve:s1 & npm run serve:s2 & npm run serve:frontend
```

Access http://localhost:8080

## How to run the project in production

This project uses traefik as an revere proxy to route traffic through the same domain. First start Traefik.

```
$ docker network create shared
$ docker-compose -f ./reverseProxy/docker-compose.yml up
```

Then start the main project:

```
$ docker-compose up
```

## Things that are missing

- input data validation for POST/PUT requests
- testing of functions
- remove unecessary dependencies and move the dev dependecies to the right spot (s1 and s2)
