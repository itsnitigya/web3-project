const express = require('express');
const app = express();
const Moralis  = require('moralis/node');
const appId = "Qm369KHMIFJf6O23zwc8LEO5aOHzcs3PdKPj7uD8";
const serverUrl = "https://iydi30ojpcdv.usemoralis.com:2053/server";
Moralis.start({ serverUrl, appId });

app.get('/token/:address', async (req,res)=>{
	const address = req.param('address')
        const options = { chain: 'eth', address: address }
        const balances = await Moralis.Web3API.account.getTokenBalances(options);

        var response = balances.map(balance =>({
            contractAddress: balance.token_address,
            name: balance.name,
            logo: balance.logo,
            balance: balance.balance
        }));

        res.send(response);
});

app.get('/nfts/:address',async (req,res)=>{
		const address = req.param('address')
     	const options = { chain: 'eth', address: address };
        const userEthNFTs =  await Moralis.Web3API.account.getNFTs(options);

        var response = userEthNFTs.result.map(nft =>({
            tokenId: nft.token_id,
            contractAddress: nft.token_address,
            image: nft.token_uri,
            name: nft.name,
            description: nft.metadata
        }));

        res.send(response);
});

app.listen(3000);