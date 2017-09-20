// https://blockchain.info/api/blockchain_api
import fetchData from '../utils/fetch'

// REST API
const proxyURL = 'https://cors-anywhere.herokuapp.com/'
const REST_URL = 'https://blockchain.info'

// Returns info about a single address
export const getAddress = (address) =>
  fetchData(`${proxyURL}${REST_URL}/rawaddr/${address}`,`&cors=true`)

// Returns a single transaction by hash
export const getTx = (tx_hash) =>
  fetchData(`${proxyURL}${REST_URL}/rawtx/${tx_hash}`,`&cors=true&format=json`)

// Returns a list of unconfirmed TXs
export const getUnconfirmedTxs = () =>
  fetchData(`${proxyURL}${REST_URL}/unconfirmed-transactions`,`&cors=true&format=json`)

// Returns latest block
export const getLatestBlock = () =>
  fetchData(`${proxyURL}${REST_URL}/latestblock`,`&cors=true&format=json`)

// Returns block by height or hash
export const getBlock = (block_id) =>
  fetchData(`${proxyURL}${REST_URL}/rawblock/${block_id}`,`&cors=true&format=json`)

// Returns array of blocks from given timestamp
export const getBlocks = (timestamp) =>
  fetchData(`${proxyURL}${REST_URL}/blocks/${timestamp}`,`&cors=true&format=json`)

// Websocket API

export const socket = () => {
  const blockchainSocket = new WebSocket('wss://ws.blockchain.info/inv')

  return new Promise(resolve => blockchainSocket.onopen = (event) => {
    // Subscribe to blocks
    blockchainSocket.send(JSON.stringify({ op: 'blocks_sub' }))
    // Subscribe to txs
    blockchainSocket.send(JSON.stringify({ op: 'unconfirmed_sub' }))

    resolve(blockchainSocket)
  })
}
