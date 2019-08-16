import { LOGIN_SUCCESS,LOGIN_FAILED } from './login-action-type'

const initialState = {
    username : '',
    password : '',
    error : ''
}

export default (state=initialState,action) => {
    const { payload, type } = action;

    switch(type){
        case LOGIN_SUCCESS:
            return {...state, username:payload[0].username, password: payload[0].password}
        case LOGIN_FAILED:
            return{...state, error:payload}
        default :
            return state
    }
}
