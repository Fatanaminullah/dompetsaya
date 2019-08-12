import { LOGIN_SUCCESS,LOGIN_FAILED } from './login-action-type'
import axios from '../../../config/axios'
import { isExpressionWrapper } from '@babel/types';

export const onLogin = (username,password) => {
    return dispatch => {
        axios.post('/login',{
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
        }).catch(error =>{
            dispatch({
                type : LOGIN_FAILED,
                payload : error.response.data
            })
        })
    }
}