
export const getBlock = (state, hash) => state.Blocks.list[hash]

const initialState = {
  activeBlock: null,
  list: {}
}

const Blocks = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {

    case 'SET_ACTIVE_BLOCK':
      return {
        ...state,
        activeBlock: action.hash
      }

    case 'ADD_BLOCK':
      return {
        ...state,
        list: {
          ...state.list,
          [action.block.hash]: {
            ...action.block,
            tx_values: action.block.tx.reduce((blockTotal, tx) =>
              blockTotal += tx.out.reduce((txTotal, output) => txTotal += output.value, 0)
              ,0
            ),
            tx: [
              ...action.block.tx.map(tx => ({
                ...tx,
                value: tx.out.reduce((total, output) => total += output.value, 0)
              }))
            ]
          }
        }
      }

    default:
      return state
  }
}

export default Blocks
