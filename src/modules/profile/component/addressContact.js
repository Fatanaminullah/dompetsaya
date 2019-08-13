import React, { Component } from 'react'
import { AtiCard,AtiButton, AtiTextAreaField, AtiTextbox, AtiTextInputNumeric } from 'ati-react-web';
import { Row, Col } from 'antd'


class AddressContact extends Component {
    render(){
        if (this.props.personalInfo.length !== 0) {

        const { personalInfo,editAddressContact,
                onEditAddressContact,personalInfoState,
                handleChange,saveEditAddress} = this.props
        const { alamat,kota,negara,nomor_telepon } = personalInfo[0]
        
        return(
            <AtiCard
                isLoading={false}
                cardTitle='Address and Contact'
                extraStyle={{
                    width:'90%'
                }}
                content={
                    editAddressContact ?
                    <div className='personal-info'>
                        <Row type='flex' justify='start' >
                                <Col span={12}>
                                    <p className='text-secondary'> Address </p>
                                </Col>
                                <Col span={12}>
                                    <AtiTextAreaField 
                                        id='address'
                                        value={personalInfoState.address}
                                        events={
                                            {onChange:handleChange}
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> City </p>
                                </Col>
                                <Col span={12}>
                                   <AtiTextbox 
                                        id='city'
                                        value={personalInfoState.city}
                                        events={
                                            {onChange:handleChange}
                                        }
                                   />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Country </p>
                                </Col>
                                <Col span={12}>
                                    <AtiTextbox
                                        id='country'
                                        value={personalInfoState.country}
                                        events={
                                            {onChange:handleChange}
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Phone Number  </p>
                                </Col>
                                <Col span={12}>
                                <AtiTextInputNumeric
                                        id='phone'
                                        format='+62 ###-####-####'
                                        scale = {11} 
                                        precision = {5} 
                                        className = "text-input-numeric-custom" 
                                        thousandSeparator = {true}
                                        value={personalInfoState.phone}
                                        events={
                                            {onValueChange:handleChange}
                                        }
                                    />
                                </Col>
                            </Row>
                            <Row type='flex' justify='end'>
                                    <AtiButton
                                        text='Cancel'
                                        className='btn btn-outline-danger mx-1'
                                        events={
                                            { onClick: () => { onEditAddressContact() } }
                                        }
                                    />
                                    <AtiButton
                                        text='Save'
                                        className='btn btn-outline-success mx-1'
                                        events={
                                            { onClick: () => { saveEditAddress() } }
                                        }
                                    />
                                </Row>
                    </div>
                    : <div className='personal-info'>
                        <Row type='flex' justify='start' >
                                <Col span={12}>
                                    <p className='text-secondary'> Address </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'>
                                        {alamat}
                                    </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> City </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> {kota} </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Country </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> {negara} </p>
                                </Col>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Col span={12}>
                                    <p className='text-secondary'> Phone Number  </p>
                                </Col>
                                <Col span={12}>
                                    <p className='text-secondary'> +62{nomor_telepon} </p>
                                </Col>
                            </Row>
                            <Row type='flex'>
                                <Col span={24} align='right'>
                                    <AtiButton
                                        text='Edit Address and Contact'
                                        className='btn btn-outline-primary'
                                        events={{
                                            onClick: () => {
                                                onEditAddressContact()
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
            }else{
                return null
            }
    }
}

export default AddressContact