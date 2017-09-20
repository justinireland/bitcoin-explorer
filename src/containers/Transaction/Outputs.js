import React, { Component } from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite-any-height'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Divider from 'material-ui/Divider'
import Expandable from '../../components/Expandable'
import FormattedText from '../../components/FormattedText'

const styleSheet = createStyleSheet('Outputs', theme => ({
  address: {
    fontSize: 13
  },
  row: {
    marginBottom: 8,
    marginTop: 8
  }
}));

class Outputs extends Component {

  render() {
    const { classes, dispatch, outputs, totalValue } = this.props
    return (
      <div>
        <Infinite
          containerHeight={window.innerHeight-160}
          preloadAdditionalHeight={window.innerHeight*2}
          list={
            outputs.map((out, i) => (
              out.addr &&
              <div key={i}>
                <Expandable
                  key={i}
                  onClick={() => dispatch({ type: 'FETCH_ADDRESS', address: out.addr })}
                  progressColor="accent"
                  progressValue={(out.value / totalValue) * 100}
                  title={
                    <FormattedText
                      className={classes.address}
                      text={out.addr}
                      type="subheading"
                    />
                  }>
                  {
                    out.addr &&
                    <div
                      className={classes.row}
                      onClick={() => dispatch({ type: 'REQ_SET_VIEW', view: 'Address', id: out.addr })}
                    >
                      <FormattedText text={out.addr} color="accent" type="subheading" ellipsis="right" />
                      <FormattedText text="ADDRESS" type="caption" />
                    </div>
                  }
                  {
                    out.value &&
                    <div className={classes.row}>
                      <FormattedText
                        text={`${(out.value / 100000000).toFixed(8).toString()} BTC`}
                        type="subheading" />
                      <FormattedText text="VALUE" type="caption" />
                    </div>
                  }
                  {
                    out.script &&
                    <div className={classes.row}>
                      <FormattedText text={out.script} type="subheading" ellipsis="right" />
                      <FormattedText text="SCRIPT" type="caption" />
                    </div>
                  }
                </Expandable>
                <Divider light />
              </div>
            ))
          }
        />
      </div>
    )
  }
}

export default withStyles(styleSheet)(connect()(Outputs))
