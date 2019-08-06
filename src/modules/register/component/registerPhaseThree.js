import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd'
import {  AtiTooltip, AtiCard, AtiCardMeta, AtiFileUpload,AtiSpinner,AtiAlertBox } from 'ati-react-web';
import '../../../assets/css/register-step.css'

class RegisterPhaseThree extends Component {
    render() {
        const { 
            backStepRegister,
            defaultProfilePicture, 
            uploadPhoto, 
            deletePhoto,
            finishRegister,
            spinnerStatus,
            notifSuccess
        } = this.props
        
        return (
            <Row type='flex' align='middle' className='mt-5' >
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AtiSpinner
                    spinning={spinnerStatus}
                >
                    <Row type="flex" justify="center">
                        <Col span="12" align="middle">
                            <AtiCard isLoading={false}
                                content={<AtiCardMeta metaTitle='Profile Picture'
                                    metaDescription='You have to upload your profile picture to finish the registration!'
                                    className='' />}
                                extraElement={null}
                                extraStyle={{ "width": 250 }}
                                cover={<img alt='example'
                                    src={defaultProfilePicture} />}
                                actions={[
                                <Icon 
                                    type='delete'
                                    onClick={deletePhoto}
                                />, 
                                <AtiFileUpload 
                                    type="avatar"
                                    showUploadList={false}
                                    listType="text"
                                    events={
                                        onchange=uploadPhoto
                                    }
                                />
                                ]} />
                        </Col>

                    </Row>
                        <Row type="flex" justify="space-between">
                            <Col span={24} className="mt-3">
                            <AtiAlertBox id="alert-id"
                                color="success"
                                isOpen={notifSuccess}
                                closable={true}
                                message="Register Success !">
                            </AtiAlertBox>
                            </Col>
                            <Col span={12} align='left' >
                                <AtiTooltip
                                    title='Back to the Second Step'
                                    mouseLeaveDelay={0}
                                    mouseEnterDelay={0.1}
                                >
                                    <Icon 
                                        type="left-circle" 
                                        className="back" 
                                        onClick={backStepRegister} />
                                </AtiTooltip>
                            </Col>
                            <Col span={12} align='right'>
                                <AtiTooltip
                                    title='Click to Finish Register'
                                    mouseLeaveDelay={0}
                                    mouseEnterDelay={0.1}
                                >
                                    <Icon 
                                        type="check-circle" 
                                        className="finish" 
                                        onClick={finishRegister}
                                    />
                                </AtiTooltip>
                            </Col>
                        </Row>
                </AtiSpinner>
                </Col>
            </Row>
        )
    }
}

export default RegisterPhaseThree