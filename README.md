# Generative NFTs

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache](https://www.trufflesuite.com/ganache) (For Local Blockchain)
- [Infura.io](https://infura.io/) (For copying the Ethereum mainnet)
- [MetaMask](https://metamask.io/) (Ethereum Wallet)
- [Git](https://git-scm.com/)/[GitHub](https://github.com) (Commit our code)
- [Fleek](https://fleek.co/) (Website Deployment)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), I recommend using node version 10.16.3 to avoid any potential dependency issues
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle --version`. To install truffle run `npm i -g truffle`.
- Install [Ganache](https://www.trufflesuite.com/ganache).
- Install [MetaMask](https://metamask.io/) in your browser.

# Nft-masterclass

Create your own nft project, Even if your are not an artist nor a coder, you can actually drop and mint live tokens and hopefully get a lot of things done.

## Basics

- Nft - Definition - Non Fungible Tokens (NFTs) are digital assets that represent objects like art, collectible, and in-game items. They are traded online, often   with cryptocurrency, and are generally encoded within smart contracts on a blockchain.

- Artwork - Create artwork even if you are not an artist.

- Codework - Create code if you are an artist- in this cas- e - contract - frontened(website) etc. 

- Fungible refers to a collection where all the assets are the same, like bitcoin, ether and uniswap tokens.All the uniswaps are fungibleas all have the same    
- value. Bitcoins can be be traded/ exchanged as they are all the same.

- Nonfungible - Means that every assetin the collection has a different heirarchy and a different value. like baseballcards, realestate, no two houses are the - -  - same.
- nfts are just tokens that arent all worth the same. This has very advanced application in blockchain technology but here we shall stick with the big trend i.e. - artwork.

## https://builtin.com/blockchain/nft-cryptoart-guide

- NFT Drop - An NFT drop is the release of a non-fungible token project. A drop refers to the exact date, time, and generally the minting price of the NFT. Many - - NFT drops have purchase limits which apply to the number of NFTs you are able to mint in one transaction. Purchasing at drop time is a great way to save money -  - as well.

- NFT Mint - NFTs ("Non-Fungible Tokens") are one-of-a-kind tokens that represent a unique good or asset, like digital art. ... Similar to the way that metal - - - coins are minted and added into circulation, NFTs are also tokens that get “minted” once they are created.

- NFT marketplace - An NFT marketplace is where crypto collectibles and assets are discoverd, bought or sold. openSea is the largest nft marketplace.

- How to get an nft in the first place? An nft drop is set for a specific date and time on an nft marketplace which is advertised and then bought from    
- cryptocurrency - so while minting an nft from the marketplace one gets a random character out of the collection. To find out exactly which nft one has got, go 
- to OpenSea profile and discover. 

## Basic workflow of nfts.

- As a developer, one creates these projects for money, creating nft valuables, minting own nft, buying from secondary marketplace charging people money at the - - minting event and collecting funds whenever drop approaches. 
- Go to OpenSea.org. Scroll down and click on BoredApeYachtClub. https://www.livemint.com/technology/apps/why-people-are-excited-about-bored-ape-nfts-11635961129148.html. A collection of 10,000 digital images of apes has amassed sales worth millions of dollars in 2021. Sold as non-fungible tokens (NFTs), - - the Bored Ape NFTs are actually part of a bigger NFT buying trend. Mint explains this new investment trend.Click on an asset. In the details section on the left - side under image click at the contract address which shall lead to the etherscan.io(Etherscan is a Block Explorer and Analytics Platform for Ethereum, a -    
- decentralized smart contracts platform). Have a peek at the source code in the contract section, the smart contract keeping track of ownership, number of 
- ownership, balances, business logic of buying and selling around, functions 'from' - the seller and 'to' - the buyer - etc. nfts follow a standard template -    
- erc721 in this case.
- An nft is stored in two places - The smart contract resides on the blockchain keeping track of ownership, accounting and handling balances of transfer around. - - Whereas,the artwork of the nft doesnt reside on the blockchain itself, as it shall be cost prohibitive exceeding the gas limit, therefore, it is stored on a     
- distributed system for storing and accessing files, a platform which is not exactly a blockchain but kinda works like a blockchain in the way that it is 
- immutable. like ipfs, pinata etc. images for nft is uploaded to IPFS, pinata etc which gives a url for the artwork and reference to the smart contract(keeps -
- track of image url linking to ipfs to fetch the art work for the token). The format of the ipfs://abc123/1.json (meta data for ur token able to link to image -
- itself). Please note that u can change the base url.

## Creating the Artwork

- There are different paths for creating the artwork. 
- 1. If you are not artistic and have no desire to create or cant (the easiest way to do this is to go to freelancing website and find a free lance artist for 
- artwork. 
- 2. Collaboration with an artist is also an option. Just Code into smart contract the portion of the artist share which shall progmatically be transferred to 
- his/her cryptowallet. This makes the collaboraton trustworthy.
- 3. Create artwork with an editor or code. Create artwork with multiple attributes(layers), like expressions, accessories and backgrounds.
- 4. Open source platforms like openemoji.org for designers, developers and everyone else where all emojis are free to use. Use adobe photoshop and gimp to ###   - create images that exist inside the square  same shape every one, define attributes and core. 
- 5. Finally use hashLips art generator to generate images from the different layers(attributes, expressions, accessories, backgrounds)


## Setting Up the Artwork 

- In this project, we first create artworks by taking art layers from an open source platform - openmoji.org - and then put the layers in the art generator to 
- generate images. HashLips repo below already carries the image layers. If we need to change them with our own artwork, we could replace them in the layers 
- folder by using clear names and rarity levels as discussed below and then make necessary changes in the config.js file like layesOrder names as per your own 
- artwork. However, this project uses the layers as per the hashLips repo. Using the same layers, we can still tweak or play around with the layer configurations 
- in the config.js file.

##  Using the hashLips art generator.

- Clone the repo: https://github.com/HashLips/hashlips_art_engine.git. Go to terminal directory of the cloned repo and type npm install. In main.js there is 
- generator(A js app written specifically for this purpose) that takes our layers and splits them out as nfts. Open the editor. Lets start with the layers. In the - different background layers, the first one is background containing black#1.png. The #1 shows the occurence of the layer in the generated images. Here we just 
- have 1 layer so the number 1 shows that only this layer is being shown in the images. In the next layer of bottom lid, the, high low and middle have rarity of 
- 20, 40, and 40 each which adds up to 100. In eye color layer, only yellow has a rarity of 10 i.e. it is the least rare whereas the other colors all have 1 
- number which shows that all the remaining colors are least rare equally. In eyeball layer, the rarity levels 50 of red and white shows that they will be equally 
- distributed in the generated images. So we can assume that rarity(occurrence) of the layers in the generated images is controlled by the #no tag in the layer 
- name feature of the layer item. It is recommended to change the description in the config.js file has  depending upon the nature of the artwork. In this case we 
- shall describe it to be Open Emoji NFT Project.  After typing npm install, type node index.js and a build folder shall be created comprising images and json 
- folder. The images folder shall initially generate 5 images. 5 images because on line 27 of config.js grow edition to size set to 5. reset to 50 and type node 
- index.js, there wil be 50 images generated. Please note that the 'DNA exists' tag in the terminal is because the image is being duplicated and hence the 
- generator rejects the duplicated image. 

## UpLoading Images to ipfs/pinata

- Different services for uploading nft media like ipfs, fleek a common one (setup website later), pinata etc. Here we are going to use pinata. Sign in pinata,  - 
- choose a free price plan, upload build/images folder to pinata. Rename the uploaded folder. Copy cid. Paste in place ipfs://"cid" in the config.js. Go to 
- terminal. node utils/update_info.js. Now inside build/json folder u see the image url updated accordingly.
- Now please refer to the boredapeyachtclub on the opensea and notice the different traits and properties of the nft. These traits and properties are included in 
- the json file which has to be uploaded to ipfs/pinata. Now this json cid/hash shall be used to add the smart contract to the blockchain. 


# Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd open_emojis
$ npm install 
```

### 3. Setup .env File
Create a .env file or rename the .env.example file, and update the values. The API & IPFS keys are technically optional for local testing, if you plan to deploy to the testnet or mainnet, you'll need to update those values.

### 4. Start Ganache

### 5. Migrate Smart Contracts
`$ truffle migrate --reset`

### 6. Run Frontend Application
In a separate CMD prompt/terminal run:
`$ npm start`

### 7. (Optional) Test Smart Contracts
`$ truffle test`

## Preparing for Contract Deployment
- Create or log in to your [Infura.io](https://infura.io/login) account and create a new project, and save your project ID located in your project settings, you'll need this if deploying to Ethereum Mainnet, or Rinkeby Testnet.

- If deploying to Polygon, you may need to setup the network in MetaMask. To do this, open MetaMask, in the top right click on your profile icon -> Settings -> Networks -> Add Network. 
  - For **Polygon Mainnet** fill in the following:
    1. **Network Name**: Polygon
    2. **New RPC URL**: https://rpc-mainnet.maticvigil.com/
    3. **Chain ID**: 137
    4. **Currency Symbol**: MATIC
    5. **Block Explorer URL**: https://polygonscan.com/
  - For the **Polygon Mumbai Testnet** fill in the following:
    1. **Network Name**: Polygon Mumbai
    2. **New RPC URL**: https://rpc-mumbai.maticvigil.com/
    3. **Chain ID**: 80001
    4. **Currency Symbol**: MATIC
    5. **Block Explorer URL**: https://mumbai.polygonscan.com/

### Funding your MetaMask Wallet

- If deploying to Polygon Mainnet, you will need to fund your MetaMask account with MATIC on the polygon chain, How you decide to transfer/fund is entirely upto you. Keep in mind if you have MATIC currently on the Ethereum Mainnet, you will need to bridge your MATIC over to the polygon chain. You can do this by visiting [https://wallet.polygon.technology/](https://wallet.polygon.technology/), also keep in mind you will have to have ETH in your account to cover gas fees!

- If deploying to Rinkeby testnet, you may use this ETH faucet supplied by chainlink to fund your account: [https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby).

- If deploying to Polygon Mumbai testnet, you may use this MATIC faucet: [https://faucet.polygon.technology/](https://faucet.polygon.technology/)

### 1. Setup your .env file
Create a .env file in the root directory of your project, and fill in the following:
- DEPLOYER_PRIVATE_KEY="YOUR_PRIVATE_KEY"
- INFURA_API_KEY="PROJECT_ID"
- PROJECT_NAME="YOUR_PROJECT_NAME"
- PROJECT_SYMBOL="YOUR_PROJECT_SYMBOL"
- IPFS_IMAGE_METADATA_CID="IPFS_CID"
- IPFS_HIDDEN_IMAGE_METADATA_CID="IPFS_CID"
- NFT_MINT_DATE="Oct 27, 2021 20:00:00"

### 2. Run your migrations
- For Rinkeby testnet: `truffle migrate --reset --network rinkeby`
- For Polygon Mainnet: `truffle migrate --reset --network matic`

## Preparing for Frontend Deployment
### 1. Create or Login to your GitHub account

### 2. Create a new repository
Input the name of your project, and a description if you wish. You may also choose to make the repository public or private

### 3. Commit your code
If you have downloaded this code, you may need to initialize it as a git repository, to do this back in your terminal run:
`$ git init`

Add files for staging:
`$ git add .`

This will ready your files for the commit, you may see if they have been added by running:
`$ git status`

Finally commit your code
`$ git commit -m "Deployment Setup"`

### 4. Update & Push to Remote URL
If you cloned from a repository, go ahead and update the origin link to the repository you created on GitHub by running:
`$ git remote set-url origin <YOUR-GITHUB-REPO-LINK>`

Otherwise run this command instead:
`$ git remote add origin <YOUR-GITHUB-REPO-LINK>`

Finally, push the code to the repoository:
`$ git push origin master`

### 5. Create or sign in to your Fleek account
Easiest option is to sign in with your GitHub account.

Click on Add new site & Connect with GitHub

Configure and select your repo to deploy

For deploy location, select IPFS hosting

On the build options and deploy tab, under the section Basic Build Settings, for framework select Create React App, then click on Deploy site.
