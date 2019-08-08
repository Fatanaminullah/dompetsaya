import React, { Component } from 'react'
import { AtiCard,AtiButton } from 'ati-react-web';
import { Row, Col } from 'antd'


class AddressContact extends Component {
    render(){
        return(
            <AtiCard
                isLoading={false}
                cardTitle='Address and Contact'
                extraStyle={{
                    width:'90%'
                }}
                content={
                    <div className='personal-info'>
                        <Row type='flex' justify='start' >
                                <Col span={12}>
                                    <p className='text-secondary'> Address </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'>
                                        Jalan Makom Raya no. 38 RT 6 RW 6 
                                    </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> City </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> Bekasi </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Country </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> Indonesia </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Phone Number  </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> +62 821-1370-5067 </p>
                                </Col>
                            </Row>
                            <Row type='flex'>
                                <Col span={24} align='right'>
                                    <AtiButton
                                        text='Edit Personal Information'
                                        className='btn-outline-primary'
                                        // events={{
                                        //     onclick: () => {
                                        //         onEditPersonalInformation()
                                        //     }
                                        // }}
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

export default AddressContact