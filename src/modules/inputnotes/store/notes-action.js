import { GET_DATA, POST_DATA} from './notes-action-type'
import Axios from '../../../config/axios';
import {success,error} from '../../../common/general-component/message/alertMessage'

export const getData = (userid) => {
    return async dispatch => {
        await Axios.get(`/showreport/${userid}`).then(res => {
            dispatch({
                type : GET_DATA,
                payload:res.data
            })
        }).catch(error => {
            console.log(error);
            
        })
    }
}

export const inputData = (params) => {
    return dispatch => {
        Axios.post(`/addreport/${params.user_id}`, params).then(res => {
            dispatch({
                type: GET_DATA,
                payload: res.data
            })
            success('Input Data Success',5)
        }).catch(error => {
            console.log(error);
            error(error.response.message,5)
        })
    }
}