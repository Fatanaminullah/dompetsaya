import { LOGIN_SUCCESS,LOGIN_FAILED } from './login-action-type'
import axios from 'axios'

export const onLogin = (username,password) => {
    return dispatch => {
        axios.post('http://localhost:6666/login',{
            username,password
        }).then(res =>{
            dispatch({
                type : LOGIN_SUCCESS,
                payload : {
                    username:res.data.username,
                    password:res.data.password
                }
            })
            console.log(res);
        },err => {
            dispatch({
                type : LOGIN_FAILED,
                payload : 'Login Failed'
            })
            console.log(err);
            
        }
        )
    }
}