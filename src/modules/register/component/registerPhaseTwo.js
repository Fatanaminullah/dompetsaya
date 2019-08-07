import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd'
import { AtiField, AtiForm } from 'ati-reduxform-web';
import { AtiTextbox,  AtiFieldError, AtiTooltip, AtiTextAreaField, AtiSelectBox, AtiTextInputNumeric } from 'ati-react-web';
import '../../../assets/css/register-step.css'

class RegisterPhaseTwo extends Component {
    render() {
        const { nextStepRegister, backStepRegister } = this.props
        return (
            <Row type='flex' align='middle' className='mt-5' >
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <AtiForm
                        // initialValues={initialData}
                        // onSubmit={onSubmit}
                        formId="login-form"
                        // validation={validation}
                        style={{ width: '50%' }}
                        className='form form-login'
                    >
                        <Row type="flex" justify="center" className="row-space mx-5">
                            <Col span={24}>
                                <AtiField name="address" >
                                    <AtiTextAreaField
                                        label="Address"
                                        id="address"
                                        name="address"
                                        className="form-control form-control-md mr-2"
                                        placeholder="write your address here ....."
                                        type="text"
                                        // value={initialData.username}
                                        // events={{ onChange: onValueChange }}
                                        containerStyle={
                                            {
                                                marginBottom: '0 !important',
                                            }
                                        }
                                    />
                                    <AtiFieldError />
                                </AtiField>
                            </Col>
                        </Row>
                        <Row type="flex" className="row-space mx-5">
                            <Col span={12}>
                                <AtiField name="city" >
                                    <AtiTextbox
                                        id="city"
                                        name="city"
                                        placeholder="city"
                                        label="City"
                                        className="form-control-md form-control mr-2"
                                        type="text"
                                        // value={initialData.password}
                                        // events={{ onChange: onValueChange }}
                                        containerStyle={
                                            {
                                                marginBottom: '0 !important',
                                            }
                                        }
                                    />
                                    <AtiFieldError />
                                </AtiField>
                            </Col>
                            <Col span={12}>
                                <AtiField name="country">
                                    <AtiSelectBox
                                        id="country"
                                        name="country"
                                        label="Country"
                                        placeholder="select your country"
                                        data={
                                            [
                                                { label: "Indonesia", value: 1 },
                                                { label: "Foreigner", value: 2 }
                                            ]
                                        }
                                    >
                                    </AtiSelectBox>
                                </AtiField>
                            </Col>
                        </Row>
                        <Row type="flex" align="left" className="mx-5">
                            <Col span={12}>
                                <AtiField>
                                    <AtiTextInputNumeric
                                        id = "phone" 
                                        name = "phone" 
                                        label = "Phone Number"
                                        placeholder="+62 xxx-xxxx-xxxx"
                                        format='+62 ###-####-####'
                                        scale = {11} 
                                        precision = {5} 
                                        className = "text-input-numeric-custom" 
                                        thousandSeparator = {true}
                                    />
                                </AtiField>
                            </Col>
                        </Row>
                        <Row type="flex" justify="space-between">
                            <Col span={12} align='left' >
                                <AtiTooltip
                                    title='Back to First Step'
                                    mouseLeaveDelay={0}
                                    mouseEnterDelay={0.1}
                                >
                                    <Icon type="left-circle" className="back" onClick={backStepRegister} />
                                </AtiTooltip>
                            </Col>
                            <Col span={12} align='right'>
                                <AtiTooltip
                                    title='Go to the last step'
                                    mouseLeaveDelay={0}
                                    mouseEnterDelay={0.1}
                                >
                                    <Icon type="right-circle" className="next" onClick={nextStepRegister} />
                                </AtiTooltip>
                            </Col>
                        </Row>
                    </AtiForm>
                </Col>
            </Row>
        )
    }
}

export default RegisterPhaseTwo