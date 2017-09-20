import { call, put, takeEvery } from 'redux-saga/effects'
import { getAddress } from '../services/blockchain-info'

export function* fetchAddress({ address }) {
  const newAddress = yield call(getAddress, address)
  yield put({ type: 'ADD_ADDRESS', address: newAddress })
}

export default function* addressSaga() {
  yield takeEvery('FETCH_ADDRESS', fetchAddress)
}
