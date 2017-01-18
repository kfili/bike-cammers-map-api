#!/bin/bash

API="http://localhost:4741"
URL_PATH="/channels"
TOKEN=tIJcT7nRdJ3aGpvQlq61/QAkJkGSuYRUdPfjeV9uzWQ=--UhzjxVtfKouvELYYMUmr0hmdLrSRe3fHgh+8ExlahiY=
TITLE=Chicago Biker POV
URL=https://www.youtube.com/user/perhour12345
CITY=Chicago
STATE=IL, USA

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "channel": {
      "title": "'"${TITLE}"'",
      "url": "'"${URL}"'",
      "city": "'"${CITY}"'",
      "state": "'"${STATE}"'"
    }
  }'

echo
