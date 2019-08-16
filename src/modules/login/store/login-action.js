import { LOGIN_SUCCESS,LOGIN_FAILED } from './login-action-type'
import axios from '../../../config/axios'
import cookies from 'universal-cookie'
import { errorMessage, success } from '../../../common/general-component/message/alertMessage'

const cookie = new cookies() 

export const onLogin = (username,password) => {
    return dispatch => {
        axios.post('/login',{
            username,password
        }).then(res =>{
            cookie.set('id',res.data[0].id, {path:'/'})
            cookie.set('username',res.data[0].username, {path:'/'})
            dispatch({
                type : LOGIN_SUCCESS,
                payload : res.data
            })
            success('Login Success, Welcome',5)
        }).catch(error =>{
            errorMessage(error.response.data,5);
            
            dispatch({
                type : LOGIN_FAILED,
                payload : error.response.message
            })
        })
    }
}