#!/bin/bash

# this is my first time working with run.sh files
# as i am not sure how the procces will be i decided to leave this 
# lines of code comented just in case.
# if the person that's reading this could give me some pointers on 
# how to create the enviromental variables it will be of great help

# setting up app and enviromental variables
npm i --save-dev
export SHEETS_ID="1B4TYe1uabJHJLLQy_8aTPSJi2yP-eg_DeTTQENzz2J8"
export SHEETS_NAME="Sheet1"
export GCLOUD_PROJECT=inbound-augury-390120
export GOOGLE_APPLICATION_CREDENTIALS=./service_account_credentials.json
# Command to start the Node.js server
node ./bin/www