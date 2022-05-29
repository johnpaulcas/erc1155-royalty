# ERC1155 with ERC2981 Standard

- This project implement [erc1155 standard](https://eips.ethereum.org/EIPS/eip-1155) with royalty [erc2981 standard](https://eips.ethereum.org/EIPS/eip-2981)

# Motivation
 - This project inspired by the famous P2E game Axie Infinity

# Setup
 - Clone this project and run the following command

```shell
npm install

# or

npm ci
```

To make sure everything works perfectly run

```shell
npx hardhat
```

# Env Setup
- Create `.env` directory on the root folder with the following variables
```shell

```shell
ETHERSCAN_API_KEY=<change with your etherscan api key>
# this is for rinkeby test network
RINKEBY_URL=https://eth-rinkeby.alchemyapi.io/v2/<add your alchemy api key here>
RINKEBY_PRIVATE_KEY=<change this with your account private key on metamask>
# If you want to specify the gas manually please uncomment and change RINKEBY_GAS
# for RINKEBY_GAS please get/refer the value from https://ethgasstation.info/ and multiple it to 1000000000 to convert it to wei
# ex: Standard gas price = 30 so 30*1000000000 = 3000000000 wei
# RINKEBY_GAS=3000000000
```

# Deployment
- On this project deployment we used `hardhat-deploy` to make the deployment organized and clean

Contract Deployment
```shell
npx hardhat deploy --network rinkeby --tags staging --reset
```

The code above will automatically verify the smart contract on rinkeby etherscan, if verification error occure please run the following to re-verify
```shell
npx hardhat --network rinkeby etherscan-verify
```
# Transaction Tx
**Deployment TX**
- Contract Deployment: [Tx 0xf1ad073d99409bad413ace3380e61922572a494affec401a381e1fa506361119](https://rinkeby.etherscan.io/tx/0xf1ad073d99409bad413ace3380e61922572a494affec401a381e1fa506361119)
- Mint token 1 with 500 initial supply [Tx 0x6fe14f66c2e4381720f7ff6c294ebed26f40282ea3951b45ee550804d93357ad](https://rinkeby.etherscan.io/tx/0x6fe14f66c2e4381720f7ff6c294ebed26f40282ea3951b45ee550804d93357ad)
- Mint token 2 with 250 initial supply [Tx 0x7b1dbede329d73f654ebb0cb2cb8eac886ea8e777b4010b78dc5d6e82343dc66](https://rinkeby.etherscan.io/tx/0x7b1dbede329d73f654ebb0cb2cb8eac886ea8e777b4010b78dc5d6e82343dc66)
- Mint token 3 with 50 initial supply [Tx 0x039e2e0f8df56ca4b8dddca868dfa240edd373ab08ee8f48d1ddb9d60af321eb](https://rinkeby.etherscan.io/tx/0x039e2e0f8df56ca4b8dddca868dfa240edd373ab08ee8f48d1ddb9d60af321eb)

# Test Royalty
- To test royalty we list our NFT Land (Axie Infinity Inspired Land) to LooksRare cause opensea doesn't support erc2981 standard as of now

**Listing Info:**
 - We list token 1 - 1 item savannah NFT with 0.1 eth price
 - Currently the royalty receiver is the contract deployer with is this address [0x9E36fcE2f2FcdBEF2B9A8D3D377FB6Dc4D48fb6f](https://rinkeby.etherscan.io/address/0x9E36fcE2f2FcdBEF2B9A8D3D377FB6Dc4D48fb6f) on our case 
 - Our buyer address [0xFED561Ac226962b5867160b9D3EDE6ae4Ba52548](https://rinkeby.etherscan.io/address/0xFED561Ac226962b5867160b9D3EDE6ae4Ba52548)
 - Royalty Reveiver (deployer on our case) will receive 2.50% royalty for each nft sold

**Buy Tx made by [0xFED561Ac226962b5867160b9D3EDE6ae4Ba52548](https://rinkeby.etherscan.io/address/0xFED561Ac226962b5867160b9D3EDE6ae4Ba52548):**
 - Tx Hash [0x58327e72218b12c27493787c3f4565cd6f668a628c01b289c54d6e75c04b95ef](https://rinkeby.etherscan.io/tx/0x58327e72218b12c27493787c3f4565cd6f668a628c01b289c54d6e75c04b95ef)

**Buy Tx Info:**
 - Deployer received 0.0955 weth with 0.0025 weth royalty
 - LooksRare sales 0.002 weth

# Address Used:
- Deployer and Royalty receiver Address: 0x9E36fcE2f2FcdBEF2B9A8D3D377FB6Dc4D48fb6f
- Buyer Address: 0xFED561Ac226962b5867160b9D3EDE6ae4Ba52548

# Contract
- [NFT Contract](https://rinkeby.etherscan.io/address/0x161f948d068dc38aad5a464080f80cf977c3d8f6)

# Market Place Link:
 - [LooksRare](https://rinkeby.looksrare.org/collections/0x161F948D068DC38aad5a464080F80CF977c3d8f6) 
 - [OpenSea](https://testnets.opensea.io/collection/land-nft-erc1155)
