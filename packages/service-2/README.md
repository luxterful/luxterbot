# Microservice 2:

This microservice has ~~two~~ **ONE** endpoint which can be called by the microservice 1. This endpoint performs a validation of the x-api-key in the first step.

- If the validation was successful, the placeholders of the incoming bot
  response should be replaced with your first and last name and returned.

- If the validation was not successful, the user should be informed in the chat
  that he should check the webhook secret.
