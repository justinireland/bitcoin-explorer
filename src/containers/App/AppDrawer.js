import React from 'react'
import { connect } from 'react-redux'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import TimelineIcon from 'material-ui-icons/Timeline'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import FormattedText from '../../components/FormattedText'

const styles = {
  inline: {
    display: 'inline-block',
    margin: 5
  },
  menuItem: {
    padding: 20
  }
}

const AppDrawer = ({ dispatch, App }) => {

  const handleDrawerClose = () => dispatch({ type: 'APP_DRAWER_CLOSE' })
  const handleMenuItemClick = (view) => dispatch({ type: 'SET_ACTIVE_VIEW', view })

  return (
    <Drawer
      onRequestClose={handleDrawerClose}
      onClick={handleDrawerClose}
      open={App.appDrawer.open}
    >
      <div>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div style={styles.menuItem} onClick={() => handleMenuItemClick('Timeline')}>
          <TimelineIcon style={styles.inline} />
          <FormattedText style={styles.inline}  text="Timeline" type="subheading" />
        </div>
        <Divider />
      </div>
    </Drawer>
  )
}

const mapStateToProps = ({ App }) => ({ App })

export default connect(mapStateToProps)(AppDrawer)
