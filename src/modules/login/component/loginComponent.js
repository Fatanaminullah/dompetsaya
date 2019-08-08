import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Row, Col } from 'antd';
import { AtiField, AtiForm } from 'ati-reduxform-web';
import { AtiCard, AtiTextbox, AtiTextPassword, AtiFieldError, AtiButton } from 'ati-react-web';
import CONSTANTS from '../../../common/utils/Constants';

import '../../../assets/css/login-page.css'


class loginComponent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        const {
            onChange, initialData,
            validation, actionButtonSubmit,navigate
        } = this.props;
        return (
            <React.Fragment>
                <Row type='flex' align='middle' className='login'>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Row type="flex" justify="center" align="middle">
                            <AtiCard
                                isLoading={false}
                                extraStyle={{ 'marginBottom': '30px', 'marginTop': '30px' }}
                                hoverable
                                content={
                                    <AtiForm
                                        initialValues={initialData}
                                        // onSubmit={onSubmit}
                                        formId="login-form"
                                        validation={validation}
                                        style={{ width: '50%' }}
                                        className='form form-login'
                                    >
                                        <Row type="flex" justify="center">
                                            <Col span={24} align='middle' ><img src={require('../../../assets/images/login-icon.png')} className='logo' /></Col>
                                        </Row>
                                        <Row type="flex" justify="center">
                                            <Col span={24}><p className="login-text">Welcome back! Please login to your account.</p></Col>
                                        </Row>
                                        <Row type="flex" justify="center" className="row-space">
                                            <Col span={24}>
                                                <AtiField name="username" >
                                                    <AtiTextbox
                                                        id="username"
                                                        name="username"
                                                        className="login-form"
                                                        placeholder="Username ... "
                                                        type="text"
                                                        value={initialData.username}
                                                        events={{ onChange: onChange }}
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
                                            <Col span={24} >
                                                <AtiField name="password" >
                                                    <AtiTextPassword
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password ... "
                                                        className="login-form form-control-md form-control"
                                                        type="text"
                                                        value={initialData.password}
                                                        events={{ onChange: onChange }}
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
                                        <Row type="flex" justify="center">
                                            <Col span={24}>
                                                <AtiButton
                                                    id="linkButton"
                                                    text="Dont have any account? Click here to register!"
                                                    type=""
                                                    className="btn btn-transparent"
                                                    style={
                                                        {
                                                            fontSize: '15px !important', border: 'transparent'
                                                        }
                                                    }
                                                events={
                                                    {
                                                        onClick: () => {
                                                            navigate(CONSTANTS.REGISTER);
                                                        }
                                                    }
                                                }
                                                />
                                            </Col>
                                        </Row>
                                        <Row type="flex" justify="center">
                                            <Col span={24}>
                                                <AtiButton
                                                    text="Login"
                                                    className="btn btn-block btn-primary"
                                                    style={{ marginTop: '25px' }}
                                                    id="submit"
                                                    htmlType="button"
                                                    events={{ onClick: actionButtonSubmit }}
                                                />
                                            </Col>
                                        </Row>

                                    </AtiForm>
                                }
                            />
                        </Row>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}

export default loginComponent