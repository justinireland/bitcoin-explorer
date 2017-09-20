import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Card, { CardContent, CardHeader } from 'material-ui/Card'
import Expandable from '../../components/Expandable'

const styleSheet = createStyleSheet('EntityWrapper', theme => ({
  card: {
    minWidth: 275,
    maxWidth: 800
  },
  flexGrow: {
    flexGrow: 1
  }
}));

class EntityWrapper extends Component {

  render() {
    const { children, classes, className, icon, progressColor="primary", progressValue, title } = this.props

    return (
      <div className={className}>
        <Card className={classes.card}>
          <Expandable
            progressColor={progressColor}
            progressValue={progressValue}
            title={<CardHeader avatar={icon} title={title} />}>
          <CardContent className={classes.flexGrow}>
            {children}
          </CardContent>
          </Expandable>
        </Card>
      </div>
    )
  }
}

export default withStyles(styleSheet)(EntityWrapper)
