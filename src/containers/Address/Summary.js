import React, { Component } from 'react'
import { connect } from 'react-redux'
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
          data.hash160 &&
          <div className={classes.row}>
            <FormattedText text={data.hash160} type="subheading" ellipsis="right" />
            <FormattedText text="HASH" type="caption" />
          </div>
        }
        {
          data.address &&
          <div className={classes.row}>
            <FormattedText text={data.address} type="subheading" ellipsis="right" />
            <FormattedText text="ADDRESS" type="caption" />
          </div>
        }
        {
          data.total_received &&
          <div className={classes.row}>
            <FormattedText
              type="subheading"
              text={`${(data.total_received / 100000000).toFixed(8).toString()} BTC`} />
            <FormattedText text="TOTAL RECEIVED" type="caption" />
          </div>
        }
        {
          <div className={classes.row}>
            <FormattedText
              type="subheading"
              text={`${(data.final_balance / 100000000).toFixed(8).toString()} BTC`} />
            <FormattedText text="BALANCE" type="caption" />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ Blocks }) => ({ Blocks })

export default withStyles(styleSheet)(connect(mapStateToProps)(Summary))
