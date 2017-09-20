import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import Infinite from 'react-infinite-any-height'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import Button from 'material-ui/Button'
import { TableSortLabel } from 'material-ui/Table'
import FormattedText from '../../components/FormattedText'
import ListItemWrapper from '../../components/ListItemWrapper'

const styles = {
  fixed: {
    positon: 'fixed'
  },
  formattedText: {
    fontSize: 14
  }
}

const styleSheet = createStyleSheet('Transactions', theme => ({
  button: {
    margin: theme.spacing.unit,
  }
}));

class Transactions extends Component {

  constructor(props){
    super(props)

    this.state = {
      activeFilter: null,
      filters: {
        hash: 'asc',
        time: 'asc',
        value: 'asc'
      },
      txs: this.props.txs
    }
  }

  handleSort = (sortBy) => {
    const sortOrder = this.state.filters[sortBy] === 'asc' ? 'desc' : 'asc'
    this.setState({
      activeFilter: sortBy,
      filters: {
        ...this.state.filters,
        [sortBy]: sortOrder
      },
      txs: _.orderBy(this.state.txs, sortBy, sortOrder)
    })
  }

  render() {
    const { classes, dispatch, totalValue } = this.props
    return (
      <div>
        {
          <div>
            <div>
              <Button
                dense
                className={classes.button}
                onClick={() => this.handleSort('time')}
              >
                <TableSortLabel
                   active={this.state.activeFilter === 'time'}
                   direction={this.state.filters.time}
                 >
                  Time
                </TableSortLabel>
              </Button>
              <Button
                dense
                className={classes.button}
                onClick={() => this.handleSort('value')}
              >
                <TableSortLabel
                   active={this.state.activeFilter === 'value'}
                   direction={this.state.filters.value}
                 >
                  Value
                </TableSortLabel>
              </Button>
            </div>
            <Infinite
              containerHeight={window.innerHeight-140}
              preloadAdditionalHeight={window.innerHeight*2}
              list={
                this.state.txs.map((tx, index) =>
                  <ListItemWrapper
                    key={index}
                    onClick={() => dispatch({ type:'REQ_TX', hash: tx.hash })}
                    progressValue={((tx.value / totalValue) * 100) || 0.000001}
                  >
                    <FormattedText
                      style={styles.formattedText}
                      text={moment.unix(tx.time).format('dddd, MMMM Do, YYYY h:mm:ss A')}
                      align="left"
                    />
                    {/*
                    <FormattedText
                      style={styles.formattedText}
                      text={tx.hash}
                      align="left"
                      ellipsis="right"
                    />
                    */}
                    <FormattedText
                      style={styles.formattedText}
                      type="subheading"
                      text={`${(tx.value / 100000000).toFixed(8).toString()} BTC`} />
                  </ListItemWrapper>
                )
              }
            />
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styleSheet)(connect()(Transactions))
