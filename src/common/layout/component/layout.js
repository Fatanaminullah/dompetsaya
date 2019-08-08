import React from 'react';
import { Layout } from 'antd';
import { AtiFooter, AtiBackTop } from 'ati-react-web';
import LayoutSider from './sider';
import LayoutContent from './content';
import LayoutHeader from './header';

export default class AtiLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                    <Layout style={{ height: "100%" }}>
                        <AtiBackTop 
                            visibilityHeight='100'
                        />
                        <LayoutSider {...this.props} />
                        <Layout>
                            <LayoutHeader {...this.props} />
                            <LayoutContent {...this.props} />
                            <AtiFooter style={{ textAlign: 'center' }}>
                                DOMPETSAYA ©2019 Created by Me
                            </AtiFooter>
                        </Layout>
                    </Layout>
            </React.Fragment>
        )
    }

}
