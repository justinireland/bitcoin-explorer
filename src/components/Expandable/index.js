import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import classnames from 'classnames'
import Collapse from 'material-ui/transitions/Collapse'
import { LinearProgress } from 'material-ui/Progress'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'

const styleSheet = createStyleSheet('Expandable', theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flex: {
    display: 'flex'
  },
  flexGrow: {
    flex: '1 1 auto',
    overflowY: 'auto'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

class Expandable extends Component {
  state = {
    expanded: false
  }
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
    return this.props.onClick ? this.props.onClick() : null
  }

  render() {
    const { children, classes, progressColor="primary", progressValue, style, title } = this.props
    return (
      <div style={style}>
        {
          progressValue &&
          <LinearProgress color={progressColor} mode="determinate" value={progressValue} />
        }
        <div className={classes.flex} onClick={this.handleExpandClick}>
          {
            <Typography className={classes.title} type="button">
              {title}
            </Typography>
          }
          <div className={classes.flexGrow} />
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
             onClick={this.handleExpandClick}
             aria-expanded={this.state.expanded}
             aria-label="Show more"
           >
             <ExpandMoreIcon />
          </IconButton>
        </div>
        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Expandable)
