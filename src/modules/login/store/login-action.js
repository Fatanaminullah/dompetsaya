import { LOGIN_SUCCESS,LOGIN_FAILED } from './login-action-type'
import axios from '../../../config/axios'
import cookies from 'universal-cookie'

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
        }).catch(error =>{
            dispatch({
                type : LOGIN_FAILED,
                payload : error.response.message
            })
        })
    }
}