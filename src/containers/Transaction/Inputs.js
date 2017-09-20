import React, { Component } from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite-any-height'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Expandable from '../../components/Expandable'
import FormattedText from '../../components/FormattedText'

const styleSheet = createStyleSheet('Inputs', theme => ({
  address: {
    fontSize: 13
  },
  row: {
    marginBottom: 8,
    marginTop: 8
  }
}));

class Inputs extends Component {

  render() {
    const { classes, dispatch, inputs, totalValue } = this.props
    return (
      <div>
        <Infinite
          containerHeight={window.innerHeight-160}
          preloadAdditionalHeight={window.innerHeight*2}
          list={
            inputs && inputs.map((input, i) => (
              input.prev_out && input.prev_out.addr &&
              <div key={i}>
                <Expandable
                  key={i}
                  onClick={() => dispatch({ type: 'FETCH_ADDRESS', address: input.prev_out.addr })}
                  progressColor="accent"
                  progressValue={
                    input.prev_out &&
                    ((input.prev_out.value / totalValue) * 100)
                  }
                  title={
                    <FormattedText
                      className={classes.address}
                      text={input.prev_out.addr}
                      type="subheading"
                    />
                  }
                >
                  {
                    input.prev_out.addr &&
                    <div
                      className={classes.row}
                      onClick={() => dispatch({ type: 'REQ_SET_VIEW', view: 'Address', id: input.prev_out.addr })}
                    >
                      <FormattedText text={input.prev_out.addr} color="accent" type="subheading" ellipsis="right" />
                      <FormattedText text="ADDRESS" type="caption" />
                    </div>
                  }
                  {
                    input.prev_out.value &&
                    <div className={classes.row}>
                      <FormattedText
                        text={`${(input.prev_out.value / 100000000).toFixed(8).toString()} BTC`}
                        type="subheading" />
                      <FormattedText text="VALUE" type="caption" />
                    </div>
                  }
                  {
                    input.script &&
                    <div className={classes.row}>
                      <FormattedText text={input.script} type="subheading" ellipsis="right" />
                      <FormattedText text="SCRIPT" type="caption" />
                    </div>
                  }
                </Expandable>
              </div>
            ))
          }
        />
      </div>
    )
  }
}

export default withStyles(styleSheet)(connect()(Inputs))
