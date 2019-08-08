import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd'
import { AtiField, AtiForm } from 'ati-reduxform-web';
import { AtiTextbox, AtiTextPassword, AtiFieldError, AtiButton, AtiDatePicker, AtiRadioButton, AtiTooltip} from 'ati-react-web';
import '../../../assets/css/register-step.css'

class RegisterPhaseOne extends Component {
    render() {
        const { nextStepRegister } = this.props
        return (
            <Row type='flex' align='middle' className='mt-5'>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <AtiForm
                        // initialValues={initialData}
                        // onSubmit={onSubmit}
                        formId="login-form"
                        // validation={validation}
                        style={{ width: '50%' }}
                        className='form form-login'
                    >
                        <Row type="flex" justify="center" className="row-space">
                            <Col span={12}>
                                <AtiField name="firstname" >
                                    <AtiTextbox
                                        id="firstname"
                                        name="firstname"
                                        className="form-control form-control-md mr-2"
                                        placeholder="Firstname"
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
                            <Col span={12} >
                                <AtiField name="lastname" >
                                    <AtiTextbox
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Lastname "
                                        className="form-control-md form-control ml-2"
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
                        </Row>
                        <Row type="flex" justify="center" className="row-space">
                            <Col span={12} >
                                <AtiField name="email" >
                                    <AtiTextbox
                                        id="email"
                                        name="email"
                                        placeholder="Email"
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
                            <Col span={12} >
                                <AtiField name="username" >
                                    <AtiTextbox
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        className="form-control-md form-control ml-2"
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
                        </Row>
                        <Row type="flex" justify="center" className="row-space">
                            <Col span={12}>
                                <AtiDatePicker
                                    id="birthday"
                                    name="birthday"
                                    className="mr-2"
                                    placeholder="Birthday"
                                    type="text"
                                    closeOnSelect={true}
                                    disableOnClickOutside={false}
                                    dateFormat="DD-MM-YYYY"
                                    // value={initialData.username}
                                    // events={{ onChange: onValueChange }}
                                    containerStyle={
                                        {
                                            marginBottom: '0 !important'
                                        }
                                    }
                                />
                            </Col>
                            <Col span={12} >
                                <AtiField name="password" >
                                    <AtiTextPassword
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control-md form-control ml-2"
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
                        </Row>
                        <Row type='flex'>
                            <Col span={12}>
                                <AtiRadioButton label="Jenis Kelamin"
                                    name="jenisKelamin"
                                    labelKey="text"
                                    valueKey="name"
                                    dataSource={[
                                        { id: "cbo1", text: "Perempuan", name: "P" }, 
                                        { id: "cbo2", text: "laki Laki", name: "L" }
                                    ]}
                                 />
                            </Col>

                        </Row>
                        <Row type="flex" justify="center">
                            <Col span={24} align='right' >
                                <AtiTooltip
                                title='Go to the second step'
                                mouseLeaveDelay={0}
                                mouseEnterDelay={0}
                                trigger="hover"
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

export default RegisterPhaseOne