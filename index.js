const express = require('express');
const axios = require('axios');
const redis = require('redis');
const PORT = 4000;

const app = express();

const redisPort = 6379;
const client = redis.createClient(redisPort)

app.get("/", (req, res) => {
    client.set("name", "poomwarawat", (err, reply) => {
      res.send(reply);
    });
  });

app.listen(PORT, () => {
    console.log(`Server is running on port`, PORT)
})