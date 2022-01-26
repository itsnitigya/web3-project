const Moralis = require('../utils/moralis')

let exp = {}

exp.token = async (req, res) => {
    try {
        const address = req.param('address')
        const options = { chain: 'eth', address: address }
        const balances = await Moralis.Web3API.account.getTokenBalances(options);

        var response = balances.map(balance =>({
            contractAddress: balance.token_address,
            name: balance.name,
            logo: balance.logo,
            balance: balance.balance
        }));

        res.sendSuccess(response);
    } catch (error) {
        console.log(error);
        res.sendError('Register error', 'Internal Server Error')
    }
}

exp.nft = async (req, res) => {
    try {
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

        res.sendSuccess(response);
    } catch (error) {
        console.log(error);
        res.sendError('Register error', 'Internal Server Error')
    }
}

module.exports = exp;
