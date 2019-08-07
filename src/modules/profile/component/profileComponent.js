import React, { Component } from 'react'
import { Row, Col } from 'antd';


export default class ProfileComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <Row type='flex'>
                    <Col span={24} align='left'>
                        <h3 className="text-secondary">Profile</h3>
                    </Col>
                </Row>


            </React.Fragment>
        )
    }
}