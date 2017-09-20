import { eventChannel } from 'redux-saga'
import { all, call, fork, put, take } from 'redux-saga/effects'
import { socket, getLatestBlock, getUnconfirmedTxs } from '../services/blockchain-info'
import { fetchBlock } from './block.saga'
import { newTxs } from './transaction.saga'

const subscribeBlockchainSocket = (socket) =>
  eventChannel(emit => {
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data)

      switch(data.op) {

        case 'block':
          console.log('new block')
          // emit({ type: 'NEW_BLOCK', block: data.x })
          break

        case 'utx':
          console.log('new tx')
          // emit({ type: 'NEW_TX', tx: data.x })
          break

        default:
          return
      }
    }
    return () => {};
  })

function* read(socket) {
  const channel = yield call(subscribeBlockchainSocket, socket)
  while (true) {
    let action = yield take(channel)
    yield put(action)
  }
}

function* fetchBlockandTxs() {
  const [unconfirmedTxs, latestBlock]  = yield all([
    call(getUnconfirmedTxs),  // Get unconfirmed Transactions
    call(getLatestBlock)      // Get latest block
  ])
  yield fork(newTxs, { txs: unconfirmedTxs.txs })
  yield fork(fetchBlock, { hash: latestBlock.hash })
}

export default function* timelineSaga() {
  // open socket and start listening for events
  const blockchainSocket = yield socket()
  yield fork(read, blockchainSocket)
  yield fork(fetchBlockandTxs)
}
