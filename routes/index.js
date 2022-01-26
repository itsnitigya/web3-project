const express = require('express')

const moralis = require('./moralis')

var router = express.Router()

router.get('/token/:address', moralis.token);
router.get('/nft/:address', moralis.nft);

module.exports = router