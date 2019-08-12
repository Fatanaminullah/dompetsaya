import React, { Component } from 'react'
import { AtiCard, AtiButton, AtiTextbox } from 'ati-react-web';
import { Row, Col, Button, Radio } from 'antd';

class PersonalInfo extends Component {
    render() {
        if (this.props.personalInfo.length !== 0) {

            const { editPersonalInfo, onEditPersonalInformation, personalInfo } = this.props
            const { nama_depan, nama_belakang, username, email, kelahiran, gender } = personalInfo[0]

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
                                <Row type='flex' justify='start' >
                                    <Col span={12}>
                                        <p className='text-secondary'> Firstname </p>
                                    </Col>
                                    <Col span={12}>
                                        <AtiTextbox
                                            value={nama_depan}
                                        />
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Lastname </p>
                                    </Col>
                                    <Col span={12}>
                                    <AtiTextbox
                                            value={nama_belakang}
                                        />
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Username </p>
                                    </Col>
                                    <Col span={12}>
                                    <AtiTextbox
                                            value={username}
                                        />
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Email </p>
                                    </Col>
                                    <Col span={12}>
                                    <AtiTextbox
                                            value={email}
                                        />
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Birthday </p>
                                    </Col>
                                    <Col span={12}>
                                    <AtiTextbox
                                            value={kelahiran}
                                        />
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Gender </p>
                                    </Col>
                                    <Col span={12}>
                                        <Radio.Group buttonStyle='solid' defaultValue={gender}>
                                            <Radio.Button value="pria">Pria</Radio.Button>
                                            <Radio.Button value="wanita">Wanita</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='end'>
                                    <AtiButton
                                        text='Cancel'
                                        className='btn btn-outline-danger mx-1'
                                        events={
                                            { onClick: () => { onEditPersonalInformation() } }
                                        }
                                    />
                                    <AtiButton
                                        text='Save'
                                        className='btn btn-outline-success mx-1'
                                        events={
                                            { onClick: () => { onEditPersonalInformation() } }
                                        }
                                    />
                                </Row>

                            </div>
                            : <div className='personal-info'>
                                <Row type='flex' justify='start' >
                                    <Col span={12}>
                                        <p className='text-secondary'> Firstname </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {nama_depan} </p>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Lastname </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {nama_belakang} </p>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Username </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {username} </p>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Email </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {email} </p>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Birthday </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {kelahiran} </p>
                                    </Col>
                                </Row>
                                <Row type='flex' justify='start'>
                                    <Col span={12}>
                                        <p className='text-secondary'> Gender </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className='text-secondary'> {gender} </p>
                                    </Col>
                                </Row>
                                <Row type='flex'>
                                    <Col span={24} align='right'>
                                        <AtiButton
                                            text='Edit Personal Information'
                                            className='btn-outline-primary'
                                            events={{
                                                onClick: () => {
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
        } else {
            return null
        }
    }
}

export default PersonalInfo