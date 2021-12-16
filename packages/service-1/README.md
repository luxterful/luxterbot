# Microservice 1

This microservice has two endpoints which can be called by the frontend:

- The first endpoint is for storing the webhook configuration data. It should accept the
  data transferred from the frontend and store it in a MongoDB.
- The second endpoint receives the entered chat message by the user. Then the
  webhook url and the webhook secret should be read from MongoDB. Based on the
  MongoDB data a POST request is made to the defined webhook url (represents API
  endpoint of Microservice 2) and the webhook secret should be passed in the request
  header as x-api-key. The body of the request includes a static bot response
  containing two placeholders.The bot response should be the following: - "Hello, {{fistname}} {{lastname}}.Thanks for applying at BOTfriends. “

The formatted response from webservice 2 should be returned to the frontend and
displayed in the chat.
