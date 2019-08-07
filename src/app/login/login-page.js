import React, { Component } from 'react';
import LoginComponent from '../../modules/login/component/loginComponent';

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
                    validatation={this.validate}
                    initialData={this.state}
                />
            </React.Fragment>
        )
    }
}

export default LoginPage