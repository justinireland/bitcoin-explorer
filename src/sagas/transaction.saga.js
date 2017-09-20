import { all, call, put, takeEvery } from 'redux-saga/effects'
import { getTx } from '../services/blockchain-info'

export function* newTxs({ txs }) {
  yield all([ ...txs.map(tx => put({ type: 'NEW_TX', tx })) ])
}

function* fetchTx(hash) {
  const newTx = yield call(getTx, hash)
  yield put({ type: 'ADD_TX', tx: newTx })
}

function* reqTx({hash}) {
  yield call(fetchTx, hash)
  yield put({ type: 'REQ_SET_VIEW', id: hash, view: 'Transaction' })
}

function* watchNewTxs({ tx }) {
  yield put({ type: 'ADD_TX', tx })
  yield put({ type: 'ADD_TX_EVENT', tx })
}

export default function* txSaga() {
  yield takeEvery('NEW_TX', watchNewTxs)
  yield takeEvery('REQ_TX', reqTx)
}
