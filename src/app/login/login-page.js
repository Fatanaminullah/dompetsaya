import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginComponent from '../../modules/login/component/loginComponent';
import { onLogin } from '../../modules/login/store/login-action'
import { navigate } from '../../common/store/action/general-action';


class LoginPage extends Component {
    state ={
        username:'',
        password:''
    }

    onChange = e => {
      if (e.target.id === 'username') {
        this.setState({ username: e.target.value });
      }
      else {
        this.setState({ password: e.target.value });
      }

    }
    
    actionButtonSubmit = () =>{
      const {username,password} = this.state
      this.props.onLogin(username,password)
    }
    validate = (values) => {
      const errors = {};
      if (!values.username) {
          errors.username = 'This field is required';
        }
        if (!values.password) {
          errors.password = 'This field is required';
        }
        return errors;
      }

    render(){
        return(
            <React.Fragment>
                <LoginComponent 
                    onChange={this.onChange}
                    validation={this.validate}
                    initialData={this.state}
                    actionButtonSubmit={this.actionButtonSubmit.bind(this)}
                    navigate={this.props.navigate}
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  ...state.layout, ...state.locale,
});

const mapDispatchToProps = (dispatch => ({
  navigate,onLogin
}))();

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)