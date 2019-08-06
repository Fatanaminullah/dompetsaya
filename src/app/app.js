import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import LoginPage from '../app/login/login-page'
import RegisterPage from '../app/register/register-page'
import Router from './../common/route/router';
import { store, history, browserHistory} from './../common/store';


class App extends Component {
    render(){
        return(
            <ReduxProvider store={store}>
                {/* <Router history={browserHistory} /> */}
                {/* <LoginPage /> */}
                <RegisterPage />
            </ReduxProvider>
        )
    }
}

export default App