import React, { Component } from 'react'
import ProfileComponent from '../../modules/profile/component/profileComponent'

class ProfilePage extends Component {
    state ={
        editPersonalInfo : false
    }

    onEditPersonalInfo = () => {
        this.setState({
            editPersonalInfo: !this.state.editPersonalInfo
        })
        console.log('klik');
        
    }
    render(){
        return(
            <ProfileComponent 
                editPersonalInfo={this.state.editPersonalInfo}
                onEditPersonalInfo={this.onEditPersonalInfo.bind(this)}
            />
        )
    }
}

export default ProfilePage