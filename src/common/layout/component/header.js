import React, {Component} from 'react'
import { Layout, Icon, Dropdown } from 'antd'
import PropTypes from 'prop-types'

import '../../../assets/css/layout.css'
import cookies from 'universal-cookie';
import { AtiDropdown } from 'ati-react-web';

const cookie = new cookies()

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
        const datasource = [
            {
                key: 'item-1',
                type: 'item',
                childern: <span>Navigation One</span>
            },
            {
                key: 'item-2',
                type: 'item',
                childern: <span>Navigation Two</span>
            },
            {
                key: 'divider-1',
                type: 'divider'
            },
            {
                key: 'item-3',
                type: 'item',
                disabled: true,
                childern: <span>Navigation Three</span>
            },
        ]
        return (
            <React.Fragment>
                <Header style={{ background: '#faf9fe', padding: '0 16px 0 0' }}>
                   
                    <div className="float-right d-flex">
                        <p className='text-secondary'>
                            {cookie.get('username')}
                        </p>
                        {/* <Dropdown
                            overlay={datasource}
                        > */}
                            <img
                                alt="foto profile"
                                src={require('../../../assets/images/profilepicture.jpg')}
                                className="rounded-circle profile-picture mx-1"
                                />

                        {/* </Dropdown> */}
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

