import React, { Component } from 'react';
import RegisterComponent from '../../modules/register/component/registerComponent';
import RegisterPhaseOne from '../../modules/register/component/registerPhaseOne';
import RegisterPhaseTwo from '../../modules/register/component/registerPhaseTwo';
import RegisterPhaseThree from '../../modules/register/component/registerPhaseThree';
import { Icon } from 'antd';
import profilePicture from '../../assets/images/profilepicture.jpg'

class RegisterPage extends Component {

    state = {
        defaultProfilePicture: profilePicture,
        currentStep : 0,
        gender : 1,
        spinner : false,
        notifSuccess: false 
    }

    nextStepRegister = () => {
        this.setState({
            currentStep:this.state.currentStep + 1
        })
    }
    backStepRegister = () => {
        this.setState({
            currentStep:this.state.currentStep - 1
        })
        console.log("klik");
        
    }
    onUpload = (e) => {
        this.setState({
            defaultProfilePicture:URL.createObjectURL(e.target.files[0])
        })
    }
    onDeleteFile = () => {
        this.setState({
            defaultProfilePicture:profilePicture
        })
        console.log("klik");
        
    }
    finishRegister =() => {
        this.setState({
            spinner : true
        })
        setTimeout(
            ()=>{
                this.setState({
                    spinner:false,
                    notifSuccess:true
                })
            },1000
        )
    }

    render(){
        const registerStep = [
            { title: 'Register Phase One', icon: <Icon type="form" />, description: 'personal info', stepContent: 
            <RegisterPhaseOne 
                nextStepRegister={this.nextStepRegister.bind(this)}
                /> },
            { title: 'Register Phase Two', icon: <Icon type="form" />, description: 'contact and address', stepContent: 
            <RegisterPhaseTwo 
                nextStepRegister={this.nextStepRegister.bind(this)} 
                backStepRegister={this.backStepRegister.bind(this)} 
                /> },
            { title: 'Register Phase Three', icon: <Icon type="form" />, description: 'photo profile', stepContent: 
            <RegisterPhaseThree 
                backStepRegister={this.backStepRegister.bind(this)}
                defaultProfilePicture={this.state.defaultProfilePicture}
                uploadPhoto={this.onUpload.bind(this)}
                deletePhoto={this.onDeleteFile.bind(this)}
                finishRegister={this.finishRegister.bind(this)}
                spinnerStatus={this.state.spinner}
                notifSuccess={this.state.notifSuccess}
                /> }
        ]
        
        return(
            <React.Fragment>
                <RegisterComponent
                    dataSource={registerStep}
                    currentStep={this.state.currentStep}           
                />
            </React.Fragment>
        )
    }
}

export default RegisterPage