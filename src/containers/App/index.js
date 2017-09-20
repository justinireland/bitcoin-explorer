import React from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'
import AppBar from './AppBar'
import AppDrawer from './AppDrawer'
import Address from '../Address'
import Timeline from '../Timeline'
import Block from '../Block'
import Transaction from '../Transaction'

const App = ({ App }) => {
  const activeView =
    App.activeView === 'Timeline' ? <Timeline />
    : App.activeView === 'Address' ? <Address />
    : App.activeView === 'Block' ? <Block />
    : App.activeView === 'Transaction' ? <Transaction />
    : <Timeline />

  return (
    <MuiThemeProvider>
      <div id="App" className="App">
        <AppBar title={App.appBar.title} />
        <AppDrawer />
        {activeView}
      </div>
    </MuiThemeProvider>
  )
}

const mapStateToProps = ({ App }) => ({ App })

export default connect(mapStateToProps)(App)
