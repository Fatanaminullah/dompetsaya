import React, { Component } from 'react'
import { Row, Col } from 'antd';
import ProfilePicture from './profilePicture'
import PersonalInfo from './personalInfo'
import AddressContact from './addressContact'
import '../../../assets/css/profile-page.css'
import { AtiSpinner } from 'ati-react-web';


export default class ProfileComponent extends Component {
    render() {
        
        const { editPersonalInfo, onEditPersonalInfo,personalInfo,isLoading } = this.props
        return (
            <React.Fragment>
                <AtiSpinner 
                    size={'large'}
                    tip={'loading'}
                    spinning={isLoading}
                >

                <Row type='flex'>
                    <Col span={24} align='left'>
                        <h3 className="text-secondary ml-5">Profile</h3>
                    </Col>
                </Row>
                <Row type='flex'>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} align='middle'>
                        <ProfilePicture />
                    </Col>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        <Row style={{marginBottom:'10px'}}>
                        <PersonalInfo
                            editPersonalInfo={editPersonalInfo}
                            onEditPersonalInformation={onEditPersonalInfo}
                            personalInfo={personalInfo}
                        />
                        </Row>
                        <Row>
                            <AddressContact />
                        </Row>
                    </Col>
                </Row>
                </AtiSpinner>
            </React.Fragment>
        )
    }
}