import { put, takeEvery, select } from 'redux-saga/effects'
import { getBlock } from '../reducers/blockReducer'

function* watchView({ id, view }) {

  const { Blocks } = yield select()

  switch(view){

    case 'Transaction':
      yield put({ type: 'SET_ACTIVE_TX', hash: id })
      yield put({ type: 'SET_ACTIVE_VIEW', view: 'Transaction' })
      break

    case 'Block':
      if(Blocks.list[id]){
        yield put({ type: 'SET_ACTIVE_BLOCK', hash: id })
        yield put({ type: 'SET_ACTIVE_VIEW', view: 'Block' })
        yield put({ type: 'FETCH_BLOCK', hash: Blocks.list[id].prev_block })
      }    
      break

    case 'Address':
      yield put({ type: 'SET_ACTIVE_ADDRESS', address: id })
      yield put({ type: 'SET_ACTIVE_VIEW', view: 'Address'})
      break

    default:
      return
  }
}

export default function* appSaga() {
  yield takeEvery('REQ_SET_VIEW', watchView)
}
