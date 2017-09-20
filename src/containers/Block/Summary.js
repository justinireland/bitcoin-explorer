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
    const { classes, data, dispatch } = this.props
    return (
      <div>
        {
          data.hash &&
          <div className={classes.row}>
            <FormattedText text={data.hash} type="subheading" ellipsis="left" />
            <FormattedText text="HASH" type="caption" />
          </div>
        }
        {
          data.height &&
          <div className={classes.row}>
            <FormattedText text={data.height} type="subheading" />
            <FormattedText text="HEIGHT" type="caption" />
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
          data.prev_block &&
          <div
            className={classes.row}
            onClick={() => dispatch({ type: 'REQ_SET_VIEW', view: 'Block', id: data.prev_block })}
          >
            <FormattedText
              text={data.prev_block}
              color="accent"
              type="subheading"
              ellipsis="left"
            />
            <FormattedText text="PREVIOUS BLOCK" type="caption" />
          </div>
        }
        {
          data.mrkl_root &&
          <div className={classes.row}>
            <FormattedText text={data.mrkl_root} type="subheading" ellipsis="right" />
            <FormattedText text="MERKLE ROOT" type="caption" />
          </div>
        }
        {
          data.tx_values > 0 &&
          <div className={classes.row}>
            <FormattedText
              text={`${(data.tx_values / 100000000).toFixed(8).toString()} BTC`}
              type="subheading" />
            <FormattedText text="TOTAL TX VALUE" type="caption" />
          </div>
        }
        {
          data.fee > 0 &&
          <div className={classes.row}>
            <FormattedText
              text={`${(data.fee / 100000000).toFixed(8).toString()} BTC`}
              type="subheading" />
            <FormattedText text="FEES" type="caption" />
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
          data.tx &&
          <div className={classes.row}>
            <FormattedText text={Object.keys(data.tx).length} type="subheading" />
            <FormattedText text="TRANSACTIONS" type="caption" />
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ Blocks }) => ({ Blocks })

export default withStyles(styleSheet)(connect(mapStateToProps)(Summary))
