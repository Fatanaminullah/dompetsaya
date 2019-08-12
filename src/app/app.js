import React, { Component } from 'react';
import cookies from 'universal-cookie'
import { Provider as ReduxProvider } from 'react-redux';
import Router from './../common/route/router';
import { store, history, browserHistory} from './../common/store';
import { keepLogin } from '../common/store/action/general-action'

const cookie = new cookies()

class App extends Component {

    render(){
        return(
            <ReduxProvider store={store}>
                <Router history={browserHistory} />
            </ReduxProvider>
        )
    }
}

export default App