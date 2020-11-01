require('dotenv').config('.env');

const port = 8000;
const baseURL = `https://localhost:${port}`;

module.exports = {
  // json web token secret for encryption
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: port,

  // oauth 2.0 credentials
  oauth2Credentials: {
    client_id: process.env.CLIENT_ID,
    project_id: "", // The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [
      `${baseURL}/authorized`
    ],
    scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events'
    ]
  }
}