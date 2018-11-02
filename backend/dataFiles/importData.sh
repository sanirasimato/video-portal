#!/bin/bash
echo  'start....'

DB=''
MONGO_PARAMS=''

echo '++++++++++++++++Running importData.sh for Development+++++++++++++++++++'
DB='video_portal'
serverUrl='http://localhost:3001'

echo $DB

mongoimport $MONGO_PARAMS --db $DB --collection users --file users.json
mongoimport $MONGO_PARAMS --db $DB --collection videos --file videos.json

echo  'end'
