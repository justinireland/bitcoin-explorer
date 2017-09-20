import React, { Component } from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import FormattedText from '../../components/FormattedText'


const styleSheet = createStyleSheet('Summary', theme => ({
  row: {
    marginBottom: 8,
    marginTop: 8
  }
}));

class Summary extends Component {

  render() {
    const { classes, data } = this.props
    return (
      <div>
        {
          data.hash &&
          <div className={classes.row}>
            <FormattedText text={data.hash} type="subheading" ellipsis="right" />
            <FormattedText text="HASH" type="caption" />
          </div>
        }
        {
          data.time > 0 &&
          <div className={classes.row}>
            <FormattedText text={data.time} type="subheading" />
            <FormattedText text="TIME" type="caption" />
          </div>
        }
        {
          data.lock_time > 0 &&
          <div className={classes.row}>
            <FormattedText text={data.lock_time} type="subheading" />
            <FormattedText text="LOCKTIME" type="caption" />
          </div>
        }
        {
          <div className={classes.row}>
            <FormattedText
              text={`${(data.out.reduce((total, output) => total += output.value, 0) / 100000000).toFixed(8).toString()} BTC`}
              type="subheading" />
            <FormattedText text="VALUE" type="caption" />
          </div>
        }
        {
          data.size > 0 &&
          <div className={classes.row}>
            <FormattedText text={`${data.size} bytes`} type="subheading" />
            <FormattedText text="SIZE" type="caption" />
          </div>
        }
        {
          data.weight > 0 &&
          <div className={classes.row}>
            <FormattedText text={data.weight} type="subheading" />
            <FormattedText text="WEIGHT" type="caption" />
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styleSheet)(Summary)
