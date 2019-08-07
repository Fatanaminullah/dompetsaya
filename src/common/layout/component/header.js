import React, {Component} from 'react'
import { Layout, Icon } from 'antd'
import PropTypes from 'prop-types'

import '../../../assets/css/layout.css'

const { Header } = Layout

class LayoutHeader extends Component {
    static propTypes = {
        toogle: PropTypes.func,
        toogleDrawer: PropTypes.func
    }

    static defaultProps = {
        toogle: () => { },
        toogleDrawer: () => { }
    }

    render() {
        return (
            <React.Fragment>
                <Header style={{ background: '#faf9fe', padding: '0 16px 0 0' }}>
                   
                    <div className="float-right d-flex">
                        <p className='text-secondary'>
                            Ini Username
                        </p>
                        <img
                            alt="foto profile"
                            src={require('../../../assets/images/profilepicture.jpg')}
                            className="rounded-circle profile-picture mx-1"
                            />
                    </div>
                    <div className="float-right">
                        <Icon
                            className="trigger"
                            type='bell'
                            onClick={this.props.notifDrawerCollapse}
                        />
                    </div>
                    <div className="float-right">
                        <Icon
                            className="trigger"
                            type='message'
                            onClick={this.props.toogleDrawerCollapse}
                        />
                    </div>
                </Header>
            </React.Fragment>
        )
    }
}

export default LayoutHeader

