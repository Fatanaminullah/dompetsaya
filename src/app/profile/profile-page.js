import React, { Component } from 'react'
import cookies from 'universal-cookie'
import ProfileComponent from '../../modules/profile/component/profileComponent'
import { getProfile } from '../../modules/profile/store/profile-action'
import { connect } from 'react-redux'
import { navigate } from '../../common/store/action/general-action'
import CONSTANTS from '../../common/utils/Constants';


const cookie = new cookies()

class ProfilePage extends Component {
    state ={
        editPersonalInfo : false,
        isLoading : false
    }

    componentDidMount(){
        this.props.getProfile(cookie.get('id'))
        
    }

    onEditPersonalInfo = () => {
        this.setState({
            editPersonalInfo: !this.state.editPersonalInfo
        })
        
        
    }
    render(){
        this.props.personalInfo.length == 0 
        ? this.state.isLoading = true 
        : this.state.isLoading = false
        return(
            <ProfileComponent 
                editPersonalInfo={this.state.editPersonalInfo}
                onEditPersonalInfo={this.onEditPersonalInfo}
                personalInfo={this.props.personalInfo}
                isLoading={this.state.isLoading}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state.layout, ...state.profile
});

const mapDispatchToProps = (dispatch => ({
    getProfile,navigate
}))();

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)