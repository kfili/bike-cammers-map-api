#!/bin/bash

API="http://localhost:4741"
URL_PATH="/channels"
TOKEN=SDhFJHK4vpMxVpAxiYShm111zJSiq01B93EZo+EjASw=--Mq7GKzqlVG53B6n9JxZrVblszO304QmthSOIItXrKZo=

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "channel": {
      "title":"Chicago Cyclist",
      "url":"https://www.youtube.com/channel/UCwrHfYf8DCLVQ-g6iV1dEeA",
      "city": "Chicago",
      "state": "IL, USA"
    }
  }'

echo


"title":"KingSeshi",
"url":"https://www.youtube.com/channel/UCobIOegQ9Rp-O9FD1xG481w",
"city":"Boston",
"state":"MA, United States"

"title": "Chicago Biker POV",
"url": "'"${URL}"'",
"city": "Chicago",
"state": "IL, USA"

URL=https://www.youtube.com/user/perhour12345
CITY=Chicago
TITLE=Chicago Biker POV
STATE=
'"${STATE}"'
