import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd';

import '../../../assets/css/layout.css';

const { Content } = Layout;


class LayoutContent extends Component {
    static propTypes = {
        childComponent:PropTypes.any.isRequired
    }

    render(){
        return(
            <React.Fragment>
                <Content style={{ margin: '0 1%', marginTop: '-1.5%', padding: '24px' }}>
                    {this.props.childComponent}
                </Content>
            </React.Fragment>
        )
    }
}

export default LayoutContent