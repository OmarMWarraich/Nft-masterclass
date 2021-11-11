import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown'
import Web3 from 'web3'

// Import Images + CSS
import logo from '../images/logo.png'
import happyImage from '../images/happy.png'
import excitedImage from '../images/excited.png'
import sadImage from '../images/sad.png'
import './App.css'

// Import ABI + Config
import OpenEmoji from '../abis/OpenEmoji.json';
import CONFIG from '../config.json';

function App() {
	const [web3, setWeb3] = useState(null)
	const [openEmoji, setOpenEmoji] = useState(null)

	const [supplyAvailable, setSupplyAvailable] = useState(0)
	const [balanceOf, setBalanceOf] = useState(0)

	const [account, setAccount] = useState(null)
	const [currentNetwork, setCurrentNetwork] = useState(null)

	const [blockchainExplorerURL, setBlockchainExplorerURL] = useState('https://etherscan.io/')
	const [openseaURL, setOpenseaURL] = useState('https://opensea.io/')

	const [isMinting, setIsMinting] = useState(false)
	const [isError, setIsError] = useState(false)
	const [message, setMessage] = useState(null)

	const [currentTime, setCurrentTime] = useState(new Date().getTime())
	const [revealTime, setRevealTime] = useState(0)

	const loadBlockchainData = async () => {
		// Fetch Contract, Data, etc.
		if (web3) {
			const networkId = await web3.eth.net.getId()
			setCurrentNetwork(networkId)

			try {
				const openEmoji = new web3.eth.Contract(OpenEmoji.abi, OpenEmoji.networks[networkId].address)
				setOpenEmoji(openEmoji)

				const maxSupply = await openEmoji.methods.maxSupply().call()
				const totalSupply = await openEmoji.methods.totalSupply().call()
				setSupplyAvailable(maxSupply - totalSupply)

				const balanceOf = await openEmoji.methods.balanceOf(account).call()
				setBalanceOf(balanceOf)

				const allowMintingAfter = await openEmoji.methods.allowMintingAfter().call()
				const timeDeployed = await openEmoji.methods.timeDeployed().call()
				setRevealTime((Number(timeDeployed) + Number(allowMintingAfter)).toString() + '000')

				if (networkId !== 5777) {
					setBlockchainExplorerURL(CONFIG.NETWORKS[networkId].blockchainExplorerURL)
					setOpenseaURL(CONFIG.NETWORKS[networkId].openseaURL)
				}

			} catch (error) {
				setIsError(true)
				setMessage("Contract not deployed to current network, please change network in MetaMask")
			}

		}
	}

	const loadWeb3 = async () => {
		if (typeof window.ethereum !== 'undefined' && !account) {
			const web3 = new Web3(window.ethereum)
			setWeb3(web3)

			const accounts = await web3.eth.getAccounts()

			if (accounts.length > 0) {
				setAccount(accounts[0])
			} else {
				setMessage('Please connect with MetaMask')
			}

			window.ethereum.on('accountsChanged', function (accounts) {
				setAccount(accounts[0])
				setMessage(null)
			});

			window.ethereum.on('chainChanged', (chainId) => {
				// Handle the new chain.
				// Correctly handling chain changes can be complicated.
				// We recommend reloading the page unless you have good reason not to.
				window.location.reload();
			});
		}
	}

	// MetaMask Login/Connect
	const web3Handler = async () => {
		if (web3) {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			setAccount(accounts[0])
		}
	}

	const mintNFTHandler = async () => {
		if (revealTime > new Date().getTime()) {
			window.alert('Minting is not live yet!')
			return
		}

		if (balanceOf > 0) {
			window.alert('You\'ve already minted!')
			return
		}

		// Mint NFT
		if (openEmoji) {
			setIsMinting(true)
			setIsError(false)

			await openEmoji.methods.mint(1).send({ from: account, value: 0 })
				.on('confirmation', async () => {
					const maxSupply = await openEmoji.methods.maxSupply().call()
					const totalSupply = await openEmoji.methods.totalSupply().call()
					setSupplyAvailable(maxSupply - totalSupply)

					const balanceOf = await openEmoji.methods.balanceOf(account).call()
					setBalanceOf(balanceOf)
				})
				.on('error', (error) => {
					window.alert(error)
					setIsError(true)
				})
		}

		setIsMinting(false)
	};

	useEffect(() => {
		loadWeb3()
		loadBlockchainData()
	}, [account]);

	return (
		<div>
			<nav className="navbar fixed-top mx-3">
				<a
					className="navbar-brand col-sm-3 col-md-2 mr-0 mx-4"
					href="http://www.dappuniversity.com/bootcamp"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={logo} className="App-logo" alt="logo" />
					Dapp University
				</a>

				{account ? (
					<a
						href={`https://etherscan.io/address/${account}`}
						target="_blank"
						rel="noopener noreferrer"
						className="button nav-button btn-sm mx-4">
						{account.slice(0, 5) + '...' + account.slice(38, 42)}
					</a>
				) : (
					<button onClick={web3Handler} className="button nav-button btn-sm mx-4">Connect Wallet</button>
				)}
			</nav>
			<main>
				<Row className="my-3">
					<Col className="text-center">
						<h1 className="text-uppercase">Open Emojis</h1>
						<p className="countdown">
							{revealTime !== 0 && <Countdown date={currentTime + (revealTime - currentTime)} />}
						</p>
						<p>Welcome! Mint your free emoji (not including gas fees) on 11/04/21</p>
					</Col>
				</Row>
				<Row className="my-4">
					<Col className="panel grid" sm={12} md={6}>
						<button onClick={mintNFTHandler} className="button mint-button"><span>Mint</span></button>
					</Col>
					<Col className="panel grid image-showcase mx-4">
						<img
							src={isError ? (
								sadImage
							) : !isError && isMinting ? (
								excitedImage
							) : (
								happyImage
							)}
							alt="emoji-smile"
							className="image-showcase-example-1"
						/>
					</Col>
				</Row>
				<Row className="my-3">
					<Col className="flex">
						<a href={openseaURL + account} target="_blank" rel="noreferrer" className="button">View My Opensea</a>
						<a href={`${blockchainExplorerURL}address/${account}`} target="_blank" rel="noreferrer" className="button">My Etherscan</a>
					</Col>
				</Row>
				<Row className="my-2 text-center">
					{message ? (
						<p>{message}</p>
					) : (
						<div>
							{openEmoji &&
								<a href={`${blockchainExplorerURL}address/${openEmoji._address}`}
									target="_blank"
									rel="noreferrer"
									className="contract-link d-block my-3">
									{openEmoji._address}
								</a>
							}

							{CONFIG.NETWORKS[currentNetwork] && (
								<p>Current Network: {CONFIG.NETWORKS[currentNetwork].name}</p>
							)}

							<p>{`NFT's Left: ${supplyAvailable}, You've minted: ${balanceOf}`}</p>
						</div>
					)}
				</Row>
			</main>
		</div>
	)
}

export default App;
