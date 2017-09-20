import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const Bar = ({ App, classes, dispatch, title }) => {

  const handleDrawerOpen = () => dispatch({ type: 'APP_DRAWER_OPEN' })

  return (
    <AppBar id="AppBar" position="fixed">
      <Toolbar>
        <IconButton
          color="contrast"
          aria-label="Menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ App }) => ({ App })

export default connect(mapStateToProps)(Bar)
