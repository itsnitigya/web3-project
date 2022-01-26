const Moralis  = require('moralis/node');
const configs = require('./config')

const appId = configs.APP_ID;
const serverUrl = configs.SERVER_URL;

Moralis.start({ serverUrl, appId });

module.exports = Moralis;