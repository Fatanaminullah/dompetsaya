import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import { AtiSideMenu } from 'ati-react-web';

const { Sider } = Layout;


class LayoutSider extends Component {

    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };

    render(){
        
        
        return(
            <React.Fragment>
                <Sider collapsible 
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                theme="light"
                >
          <div className="logo">
              <div className='div-title d-flex'>
                  <Icon type="wallet" /> DOMPETSAYA
              </div>

          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Pencatatan</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Laporan</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>Pengaturan</span>
            </Menu.Item>
          </Menu>
        </Sider>
            </React.Fragment>
        )
    }
}

export default LayoutSider
