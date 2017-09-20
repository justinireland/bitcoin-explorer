import { fork } from 'redux-saga/effects'
import appSaga from './app.saga'
import addressSaga from './address.saga'
import blockSaga from './block.saga'
import timelineSaga from './timeline.saga'
import txSaga from './transaction.saga'

export default function* rootSaga() {
  yield [
    fork(appSaga),
    fork(addressSaga),
    fork(blockSaga),
    fork(timelineSaga),
    fork(txSaga)
  ]
}
