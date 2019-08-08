import React, { Component } from 'react'
import InputSection from './inputSection'
import { Row, Col } from 'antd';
import { AtiTabsGroup } from 'ati-react-web';

class FinanceRecordsComponent extends Component {
    render(){
        return(
            <React.Fragment>
                <h3 className='text-secondary'>Financial Records</h3>
                <Row type='flex' justify='center'>
                    <Col span={24} >
                        <AtiTabsGroup 
                            tabPosition="top"
                            activeKey="tab1"
                            type="card"
                            dataSource={[
                                { 
                                    title: 'Input', key: 'tab1', 
                                    tabContent: <InputSection /> 
                                },
                                { 
                                    title: 'Finance Table', key: 'tab2', 
                                    tabContent: <div>This Tab 2 Content</div> 
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default FinanceRecordsComponent