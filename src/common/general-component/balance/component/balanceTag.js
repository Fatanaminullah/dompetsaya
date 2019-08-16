import React, { Component } from 'react'
import { AtiTooltip } from 'ati-react-web';

import '../style/balance-tag.css'

class BalanceTag extends Component {

    render() {
        const { balance, minBalance } = this.props
        console.log(this.props);
        if (balance !== 0) {
            if (balance - minBalance > 2500000) {
                return (
                    <React.Fragment>
                        <AtiTooltip
                            title='your balance is save'
                        >
                            <div className='balance-tag font-weight-blod text-success'>
                                Rp {balance.toLocaleString()}
                            </div>
                        </AtiTooltip>
                    </React.Fragment>
                )
            } else if (balance - minBalance > 500000) {
                return (
                    <React.Fragment>
                        <AtiTooltip

                            visibleOnLoad={true}
                            title='warning, save your money'
                        >
                            <div className='balance-tag text-warning'>
                                Rp {balance.toLocaleString()}
                            </div>
                        </AtiTooltip>
                    </React.Fragment>
                )
            } else if (balance - minBalance < 500000) {
                return (
                    <React.Fragment>
                        <AtiTooltip
                            title='your balance is critical!'
                        >
                            <div className='balance-tag font-weight-blod text-danger'>
                                Rp {balance.toLocaleString()}
                            </div>
                        </AtiTooltip>
                    </React.Fragment>
                )
            }
        } else {
            return null
        }
    }

}

export default BalanceTag