import { GET_DATA } from './notes-action-type'
import Axios from '../../../config/axios';

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