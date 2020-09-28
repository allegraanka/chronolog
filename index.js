const express = require('express');
const app = express();
require('dotenv').config();

const {google} = require('googleapis');

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello Chronologer!');
});

app.get('/authorized', (req, res) => {
    res.send('Hello Authorized Chronologer.');
  });

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

// generate a url that asks permissions for Google Calendar scopes
const scopes = [
    'https://www.googleapis.com/auth/calendar',
    'https://www.googleapis.com/auth/calendar.events'
];

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',
    // If you only need one scope you can pass it as a string
    scope: scopes
});

app.listen(port, () => {
  console.log(`Chronolog tool listening on port ${port}!`);
});