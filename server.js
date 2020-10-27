const express = require('express');
const axios = require('axios');
const {google} = require('googleapis');
const jwt = require('jsonwebtoken');
const CONFIG = require('./config');

const OAuth2 = google.auth.OAuth2;

const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello Chronologer!');
});

app.get('/login', (req, res) => {
  const oauth2Client = new OAuth2(
    CONFIG.oauth2Credentials.client_id, 
    CONFIG.oauth2Credentials.client_secret, 
    CONFIG.oauth2Credentials.redirect_uris[0]
  );

  const loginLink = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: CONFIG.oauth2Credentials.scopes // Using the access scopes from our config file
  });

  return res.send({ loginLink: loginLink });
});

app.get('/authorized', (req, res) => {
    res.send('Hello Authorized Chronologer. This is where we will display your data.');
  });

app.listen(CONFIG.port, () => {
  console.log(`Chronolog tool listening on port ${CONFIG.port}!`);
});