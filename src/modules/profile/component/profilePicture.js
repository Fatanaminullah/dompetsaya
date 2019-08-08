import React, { Component } from 'react'
import { AtiCard, AtiFileUpload } from 'ati-react-web';


class ProfilePicture extends Component {
    render() {
        return (
            <AtiCard
                isLoading={false}
                extraStyle={{
                    width: '80%'
                }}
                hoverable
                cover={
                    <img
                        alt='profile-picture'
                        src={require('../../../assets/images/profilepicture.jpg')}
                        className='rounded-circle'
                    />
                }
                content={
                    <AtiFileUpload
                        type="avatar"
                        showUploadList={false}
                        listType="picture-card"
                    // events={
                    //     onchange=uploadPhoto
                    // }
                    />
                }
            />
        )
    }
}

export default ProfilePicture