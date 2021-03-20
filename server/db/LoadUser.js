// this file needs to be run in solo, exp: node server/db/LoadUser.js
const AWS = require("aws-sdk");
const fs = require('fs');

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

console.log("Importing users into DynamoDB. Please wait.");
const allUsers = JSON.parse(fs.readFileSync('./server/seed/users.json', 'utf8'));
allUsers.forEach(user => {
  const params = {
    TableName: "User",
    Item: {
      "username": user.username,
      "createdAt": user.createdAt,
      "password": user.password,
      "validationCode": user.validationCode
    }
  };

  dynamodb.put(params, (err, data) => {
    if (err) {
      console.error("Unable to add thought", user.username, ". Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("PutItem succeeded:", user.username);
    }
  });
});