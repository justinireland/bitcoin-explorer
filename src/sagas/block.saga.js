import { call, put, takeEvery } from 'redux-saga/effects'
import { getBlock } from '../services/blockchain-info'

export function* fetchBlock({ hash }) {
  const block = yield call(getBlock, hash)
  yield put({ type: 'NEW_BLOCK', block })
}

function* watchNewBlocks({ block }) {
  yield put({ type: 'ADD_BLOCK', block })
  yield put({ type: 'ADD_BLOCK_EVENT', block })
  // Remove transactions included in the block
  yield put({ type: 'REMOVE_TXS', txIDs: block.tx.map(tx => tx.hash) })
  // Remove transaction events
  yield put({ type: 'REMOVE_TX_EVENTS', txIDs: block.tx.map(tx => tx.hash) })
}

export default function* blockSaga() {
  yield takeEvery('NEW_BLOCK', watchNewBlocks)
  yield takeEvery('FETCH_BLOCK', fetchBlock)
}
