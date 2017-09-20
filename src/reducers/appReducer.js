
const initialState = {
  activeView: 'Timeline',
  appBar: {
    title: 'Timeline'
  },
  appDrawer: {
    open: false
  },
  stats: {
    max_blocksize: 1000000
  },
  palette: {
    primaryDark:  '#F57C00',
    primary:      '#FF9800',
    primaryLight: '#FFE0B2',
    primaryText:  '#212121',
    accent:       '#448AFF',
    secondaryText:'#757575',
    divider:      '#BDBDBD'
  }
}

const App = (state, action) => {

  if (typeof state === 'undefined') {
    return initialState
  }

  switch(action.type) {

    case 'APP_DRAWER_CLOSE':
      return {
        ...state,
        appDrawer: {
          open: false
        }
      }

    case 'APP_DRAWER_OPEN':
      return {
        ...state,
        appDrawer: {
          open: true
        }
      }

    case 'SET_ACTIVE_VIEW':
      return {
        ...state,
        activeView: action.view,
        appBar: {
          ...state.appBar,
          title: action.view
        }
      }

    default:
      return state
  }
}

export default App
