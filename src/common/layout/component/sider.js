import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import CONSTANTS from '../../utils/Constants';


const { Sider } = Layout;


class LayoutSider extends Component {

    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };

    render(){   
      console.log(this.props.menuKey);    
        return(
            <React.Fragment>
                <Sider collapsible 
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                theme="light"
                >
          <div className="logo">
              <div className='div-title d-flex'>
                  <Icon type="wallet" />
                  <span>
                  DOMPETSAYA
                  </span>
              </div>

          </div>
          <Menu theme="light" mode="inline" 
          defaultSelectedKeys={this.props.menuKey.length === 0 ? [CONSTANTS.PROFILE_PAGE] : this.props.menuKey} 
          >
            <Menu.Item 
              key="PROFILEPAGE"
              onClick={() => {this.props.navigate(CONSTANTS.PROFILE_PAGE)}}
              >
              <Icon type="user" />
              <span>
                Profile
              </span>
            </Menu.Item>
            <Menu.Item 
              key="INPUTNOTESPAGE"
              onClick={() => {this.props.navigate(CONSTANTS.INPUT_NOTES)}}
              >
            <Icon type="account-book" />
              <span>
              Input Notes
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Report</span>
            </Menu.Item>
            <Menu.Item 
              key="SETTING"
              onClick={() => {this.props.navigate(CONSTANTS.SETTING)}}
              >
              <Icon type="setting" />
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
            </React.Fragment>
        )
    }
}

export default LayoutSider
