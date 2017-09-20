import React, { Component } from 'react'
import { connect } from 'react-redux'
import TxIcon from 'material-ui-icons/CompareArrows'
import InfoIcon from 'material-ui-icons/InfoOutline'
import SwipeTabs from '../../components/SwipeTabs'
import Summary from './Summary'
import Transactions from '../Transactions'

class Address extends Component {

  render() {
    const { Addresses } = this.props
    const activeAddress = Addresses.list[Addresses.activeAddress]
    return (
      <div>
        <SwipeTabs
          tabs={
            [
              {
                label: 'SUMMARY',
                icon: <InfoIcon />,
                content: <Summary data={activeAddress} />
              },
              {
                label: 'TX HISTORY',
                icon: <TxIcon />,
                content: <Transactions txs={activeAddress.txs} totalValue={activeAddress.tx_values} />
              }
            ]
          }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ Addresses }) => ({ Addresses })

export default connect(mapStateToProps)(Address)
