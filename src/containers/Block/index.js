import React, { Component } from 'react'
import { connect } from 'react-redux'
import TxIcon from 'material-ui-icons/CompareArrows'
import InfoIcon from 'material-ui-icons/InfoOutline'
import SwipeTabs from '../../components/SwipeTabs'
import Summary from './Summary'
import Transactions from '../Transactions'

class Block extends Component {

  render() {
    const { Blocks } = this.props
    const activeBlock = Blocks.list[Blocks.activeBlock]
    return (
      <div>
        <SwipeTabs
          tabs={
            [
              {
                label: 'SUMMARY',
                icon: <InfoIcon />,
                content: <Summary data={activeBlock} />
              },
              {
                label: 'TRANSACTIONS',
                icon: <TxIcon />,
                content: <Transactions txs={activeBlock.tx} totalValue={activeBlock.tx_values} />
              }
            ]
          }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ Blocks }) => ({ Blocks })

export default connect(mapStateToProps)(Block)
