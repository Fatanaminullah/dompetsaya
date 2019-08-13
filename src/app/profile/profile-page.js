import React, { Component } from 'react'
import cookies from 'universal-cookie'
import ProfileComponent from '../../modules/profile/component/profileComponent'
import { getProfile,editProfile,editAddress,uploadAvatar } from '../../modules/profile/store/profile-action'
import { connect } from 'react-redux'
import { navigate } from '../../common/store/action/general-action'
import CONSTANTS from '../../common/utils/Constants';
import { AtiMessage } from 'ati-react-web';
import defaultAvatar from '../../assets/images/profilepicture.jpg'


const moment = require('moment');
const cookie = new cookies()

class ProfilePage extends Component {
    state ={
        avatar:'',
        editPersonalInfo : false,
        editAddressContact: false,
        isLoading : false,
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        birthday:'',
        gender:'',
        address:'',
        city:'',
        country:'',
        phone:''
    }

    componentDidMount(){
        this.props.getProfile(cookie.get('id'))
        
    }
    
    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            this.avatar()
        }
    }
    editSuccess = () => {
        AtiMessage({type:'success', message:'Edit Success', duration:5});
    };

    avatar = () => {
        if(this.props.personalInfo.length !== 0){
            if(this.props.personalInfo[0].foto_profil.includes('null')){
                this.setState({
                    avatar:defaultAvatar
                })
            }else{
                this.setState({
                    avatar:this.props.personalInfo[0].foto_profil
                })
            }
        }
    }

    uploadingAvatar = (e) => {
        this.setState({
            avatar:URL.createObjectURL(e.target.files[0])
        })
        // this.props.uploadAvatar(cookie.get('id'),e.target.files[0])
    }

    onEditPersonalInfo = () => {
        
        const { nama_depan, nama_belakang, 
            username, email, kelahiran, gender } = this.props.personalInfo[0]
            this.setState({
                editPersonalInfo: !this.state.editPersonalInfo,
                firstname:nama_depan,
                lastname:nama_belakang,
                username:username,
                email:email,
                birthday:kelahiran.split('T')[0],
                gender:gender
            }) 
    }

    onEditAddressContact = () => {
        const { alamat, kota, negara, nomor_telepon } = this.props.personalInfo[0]
        this.setState({
            editAddressContact:!this.state.editAddressContact,
            address:alamat,
            city:kota,
            country:negara,
            phone:nomor_telepon
        })
    }

    saveEditPersonalInfo = () => {
        const {firstname,lastname,username,email,birthday,gender} = this.state
        this.props.editProfile(cookie.get('id'),firstname,lastname,username,email,birthday,gender)
        this.setState({editPersonalInfo:false})
        this.editSuccess()
    }
    saveEditAddress = () => {
        const {address,city,country,phone} = this.state
        this.props.editAddress(cookie.get('id'),address,city,country,phone)
        this.setState({editAddressContact:false})
        this.editSuccess()
    }

    handleChange = e => {
        if(e.target !== undefined){
            if(e.target.id === 'firstname'){
                this.setState({firstname:e.target.value})
            }else if(e.target.id === 'lastname'){
                this.setState({lastname:e.target.value})
            }else if(e.target.id === 'username'){
                this.setState({username:e.target.value})
            }else if(e.target.id === 'email'){
                this.setState({email:e.target.value})
            }else if(e.target.name === 'gender'){
                this.setState({gender:e.target.value})
            }else if(e.target.id === 'address'){
                this.setState({address:e.target.value})
            }else if(e.target.id === 'city'){
                this.setState({city:e.target.value})
            }else if(e.target.id === 'country'){
                this.setState({country:e.target.value})
            }
        }else if(e.value !== undefined){
            this.setState({phone:e.value})
        }else{
            this.setState({birthday:e._d.toISOString().split('T')[0]})
        }
        console.log(this.state.phone);
        
    }
    render(){
        this.props.personalInfo.length == 0 
        ? this.state.isLoading = true 
        : this.state.isLoading = false
        return(
            <ProfileComponent 
                editPersonalInfo={this.state.editPersonalInfo}
                onEditPersonalInfo={this.onEditPersonalInfo}
                editAddressContact={this.state.editAddressContact}
                onEditAddressContact={this.onEditAddressContact}
                personalInfo={this.props.personalInfo}
                personalInfoState={this.state}
                isLoading={this.state.isLoading}
                handleChange={this.handleChange}
                saveEditPersonalInfo={this.saveEditPersonalInfo}
                saveEditAddress={this.saveEditAddress}
                uploadingAvatar={this.uploadingAvatar}
            />
        )
    }
}

const mapStateToProps = state => ({
    ...state.layout, ...state.profile
});

const mapDispatchToProps = (dispatch => ({
    getProfile,navigate,editProfile,editAddress,uploadAvatar
}))();

export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage)