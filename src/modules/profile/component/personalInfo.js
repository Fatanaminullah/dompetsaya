import React, { Component } from 'react'
import { AtiCard, AtiButton } from 'ati-react-web';
import { Row, Col } from 'antd';

class PersonalInfo extends Component {
    render() {
        const { editPersonalInfo, onEditPersonalInformation } = this.props
        return (
            <AtiCard
                isLoading={false}
                cardTitle='Personal Information'
                extraStyle={{
                    width: '90%'
                }}
                content={
                    editPersonalInfo ?
                        <div className='personal-info'>
                            <Row type='flex'>
                                <Col span={24} align='right'>
                                    <AtiButton
                                        text='Edit Personal Information'
                                        className='btn-outline-primary'
                                        events={{
                                            onclick: onEditPersonalInformation
                                        }}
                                    >

                                    </AtiButton>
                                </Col>

                            </Row>

                        </div>
                        : <div className='personal-info'>
                            <Row type='flex' justify='start' >
                                <Col span={12}>
                                    <p className='text-secondary'> Firstname </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> Fatan </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Lastname </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> Aminullah </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Username </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> fatanaminullah15 </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Email </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> fatan.aminullah@anabatic.com </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Birthday </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> 15 Juni 2000 </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Gender </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> Boy </p>
                                </Col>
                            </Row>
                            <Row type='flex'>
                                <Col span={24} align='right'>
                                    <AtiButton
                                        text='Edit Personal Information'
                                        className='btn-outline-primary'
                                        events={{
                                            onclick: () => {
                                                onEditPersonalInformation()
                                            }
                                        }}
                                    >

                                    </AtiButton>
                                </Col>

                            </Row>

                        </div>
                }

            />
        )
    }
}

export default PersonalInfo