import React from 'react';
import { Layout } from 'antd';
import { AtiFooter } from 'ati-react-web';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutHeader from './header';

export default class AtiLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Layout style={{ height: "100vh" }}>
                        <LayoutSider {...this.props} />
                        <Layout>
                            <LayoutHeader {...this.props} />
                            <LayoutContent {...this.props} />
                            <AtiFooter style={{ textAlign: 'center' }}>
                                Ati Design ©2018 Created by PRDC
                            </AtiFooter>
                        </Layout>
                    </Layout>
            </React.Fragment>
        )
    }

}
