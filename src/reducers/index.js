import { combineReducers } from 'redux'
import App from './appReducer'
import Addresses from './addressReducer'
import Blocks from './blockReducer'
import Events from './eventReducer'
import Transactions from './transactionReducer'

const rootReducer = combineReducers({
  App,
  Addresses,
  Blocks,
  Events,
  Transactions
})

export default rootReducer
