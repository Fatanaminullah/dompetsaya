import React, { Component } from 'react'
import { AtiCard, AtiFileUpload } from 'ati-react-web';
import Cookies from 'universal-cookie';

const cookie = new Cookies()


class ProfilePicture extends Component {
    render() {
        const { personalInfoState,uploadingAvatar } = this.props
        
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
                        src={personalInfoState.avatar}
                        className='rounded-circle'
                        style={{width:'80%',marginTop:'10px'}}
                    />
                }
                content={
                    <AtiFileUpload
                        type="avatar"
                        showUploadList={false}
                        listType="picture-card"
                        // action='http://localhost:2000/upload/avatar/1'
                    // events={{
                    //     onChange: () => {uploadingAvatar()}
                    // }
                    // }
                    />
                }
            />
        )
    }
}

export default ProfilePicture