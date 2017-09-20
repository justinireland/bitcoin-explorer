import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import SwipeableViews from 'react-swipeable-views'
import Tabs, { Tab } from 'material-ui/Tabs'

const styles = {
  slideContainer: {
    position: 'fixed',
    top: 140,
    width: '95%',
    padding: 10
  }
}

const styleSheet = createStyleSheet('SwipeTabs', theme => ({
  root: {
    top: 70,
    width: '100%',
    position: 'fixed',
    flex: '1 0 0'
  },
  flexContainer: {
    flex: '1 0 0'
  }
}));

class SwipeTabs extends Component {

  state = {
    tabIndex: 0,
  }

  handleChange = (event, tabIndex) => this.changeIndex(tabIndex)
  changeIndex = tabIndex => this.setState({ tabIndex })

  render() {
    const { classes, tabs } = this.props
    return (
      <div>
        <Tabs
          classes={classes}
          index={this.state.tabIndex}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          fullWidth >
          {
            tabs.map((tab, i) => <Tab key={i} label={tab.label} icon={tab.icon} /> )
          }
        </Tabs>
        <div style={styles.slideContainer}>
          <SwipeableViews
            index={this.state.tabIndex}
            onChangeIndex={this.handleChangeIndex}>
            {
              tabs.map((tab, i) => <div key={i} style={{ padding: 5 }}>{tab.content}</div>)
            }
          </SwipeableViews>
        </div>
      </div>
    )
  }
}

export default withStyles(styleSheet)(SwipeTabs)
