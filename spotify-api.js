var SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const initSpotifyApi = async () => {
    // credentials are optional
    var spotifyApi = new SpotifyWebApi({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    const creds = await spotifyApi.clientCredentialsGrant();

    console.log(creds.body['access_token']);

    await spotifyApi.setAccessToken(creds.body['access_token']);
    // spotifyApi.setRefreshToken(creds.body['refresh_token']);

    return spotifyApi;
};

module.exports = initSpotifyApi;
