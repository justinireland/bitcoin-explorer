
export const getAddress = (state, address) => state.Address.list[address]

const initialState = {
  activeAddress: null,
  list: {}
}

const Addresses = (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {

    case 'SET_ACTIVE_ADDRESS':
      return {
        ...state,
        activeAddress: action.address
      }

    case 'ADD_ADDRESS':
      return {
        ...state,
        list: {
          ...state.list,
          [action.address.address]: {
            ...action.address,
            tx_values: action.address.txs.reduce((AddressTotal, tx) =>
              AddressTotal += tx.out.reduce((txTotal, output) => txTotal += output.value, 0)
              ,0
            ),
            txs: [
              ...action.address.txs.map(tx => ({
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

export default Addresses
