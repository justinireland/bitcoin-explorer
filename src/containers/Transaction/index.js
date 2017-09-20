import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoIcon from 'material-ui-icons/InfoOutline'
import InputIcon from 'material-ui-icons/Input'
import SwipeTabs from '../../components/SwipeTabs'
import Summary from './Summary'
import Inputs from './Inputs'
import Outputs from './Outputs'

class Transaction extends Component {

  render() {
    const { Transactions } = this.props
    const activeTx = Transactions.list[Transactions.activeTx]
    const totalValue = activeTx.out.reduce((total, output) => total += output.value, 0)
    return (
      <div>
        <SwipeTabs
          tabs={
            [
              {
                label: 'SUMMARY',
                icon: <InfoIcon />,
                content: <Summary data={activeTx} />
              },
              {
                label: 'INPUTS',
                icon: <InputIcon />,
                content: <Inputs inputs={activeTx.inputs} totalValue={totalValue} />
              },
              {
                label: 'OUTPUTS',
                icon: <InputIcon style={{transform: 'rotate(180deg)'}}/>,
                content: <Outputs outputs={activeTx.out} totalValue={totalValue} />
              }
            ]
          }
        />
      </div>
    )
  }
}

const mapStateToProps = ({ Transactions }) => ({ Transactions })

export default connect(mapStateToProps)(Transaction)
