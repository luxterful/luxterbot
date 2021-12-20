# botfriends coding challenge

###### by Lukas Bauer

This project is part of the coding challenge for botfriends.

Demo is available at [https://bot.luxterful.eu](https://bot.luxterful.eu). You can use following data as configuration:

> webhookUrl: **https://service-2.bot.luxterful.eu/webhook**

> webhookSecret: **5ierh7Kay6MoKxx7QclbBq7I**

## How to run the project

This project uses traefik as an revere proxy to route traffic through the same domain. First start Traefik.

```
$ docker-compose up -f ./reverseProxy/docker-compose.yml
```

Then start the main project:

```
$ docker-compose up
```

## Things that are missing

- input data validation for POST/PUT requests
- testing of functions
