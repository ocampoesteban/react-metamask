import { InjectedConnector } from '@web3-react/injected-connector'
// Ref > https://chainlist.org/
export const injected = new InjectedConnector({
    supportedChainIds: [
        1, // Ethereum Mainnet
        42, // Kovan Testnet — Which I will use to connect in a later article using Web3 and Infura which will come in handing is making simple simple transactions to test out my app
        1337 // Local Host chain. For this I used Ganache to create a local chain and connect to my MetaMask wallet.
    ]
})