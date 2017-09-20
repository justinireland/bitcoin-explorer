
export const addBlockEvent = block => ({ type: 'ADD_BLOCK_EVENT', block })
export const addTxEvent = tx => ({ type: 'ADD_TX_EVENT', tx })

const initialState = {
  list: {}
}

const Events = (state, action) => {
  
  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {

    case 'ADD_BLOCK_EVENT':
      return {
        ...state,
        list: {
          ...state.list,
          [action.block.time]: {
            type: 'block',
            id: action.block.hash
          }
        }
      }

    case 'ADD_TX_EVENT':
      return {
        ...state,
        list: {
          ...state.list,
          [action.tx.time]: {
            type: 'tx',
            id: action.tx.hash
          }
        }
      }

    default:
      return state
  }
}

export default Events
