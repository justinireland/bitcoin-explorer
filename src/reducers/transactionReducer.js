const initialState = {
  activeTx: null,
  list: {}
}
export const newTx = (tx) => ({ type: 'ADD_TX', tx })

const Transactions = (state, action) => {

  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {

    case 'SET_ACTIVE_TX':
      return {
        ...state,
        activeTx: action.hash
      }

    case 'ADD_TX':
      return {
        ...state,
        list: {
          ...state.list,
          [action.tx.hash]: action.tx
        }
      }

    case 'REMOVE_TXS':
      return {
        ...state,
        list: Object.keys(state.list)
          .filter(hash => !action.txIDs.includes(hash))
          .reduce((newList, hash) => ({...newList, [hash]: state.list[hash] }), {})
      }

    default:
      return state
  }
}

export default Transactions
