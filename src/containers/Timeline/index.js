import React from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite-any-height'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { Timeline as ReactEventTimeline } from 'react-event-timeline'
import Event from './Event'
import BlockIcon from 'material-ui-icons/Link';
import TxIcon from 'material-ui-icons/CompareArrows'

const styleSheet = createStyleSheet('Timeline', theme => ({
  container: {
    marginTop: 0,
    paddingTop: 0
  },
  event: {
    marginBottom: 20
  }
}));

const Timeline = ({ classes, dispatch, App, Blocks, Events, Transactions }) => {

  const getEvent = ({type, color, icon, id, data}) =>
    <Event
      key={data.hash}
      className={classes.event}
      icon={icon}
      color={color}
      eventLabel={type}
      timestamp={data.time}
      onClick={() => dispatch({ type: 'REQ_SET_VIEW', view: type, id })}
    />

  return (
    <div id="Timeline" className={classes.container}>
      <ReactEventTimeline>
        <Infinite
          useWindowAsScrollContainer
          preloadAdditionalHeight={window.innerHeight*2}
          list={
            Object.keys(Events.list).map((event, index) => (
              Events.list[event].type === 'tx'
                ? getEvent({
                  type: 'Transaction',
                  color: App.palette.accent,
                  icon: <TxIcon />,
                  id: Events.list[event].id,
                  data: Transactions.list[Events.list[event].id]
                })
                : Events.list[event].type === 'block'
                ? getEvent({
                  type: 'Block',
                  color: App.palette.primary,
                  icon: <BlockIcon />,
                  id: Events.list[event].id,
                  data: Blocks.list[Events.list[event].id]
                })
                : null
              )
            ).reverse()
          }
        />
      </ReactEventTimeline>
    </div>
  )
}

const mapStateToProps = ({ App, Blocks, Events, Transactions}) =>
  ({ App, Blocks, Events, Transactions })

export default withStyles(styleSheet)(connect(mapStateToProps)(Timeline))
