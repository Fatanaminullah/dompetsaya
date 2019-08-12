import { GET_PROFILE } from './profile-action-type'
import Axios from '../../../config/axios'

export const getProfile = (id) => {
    return async dispatch => {
        await Axios.get(`/users/profile/${id}`).then(res => {
            dispatch({
                type:GET_PROFILE,
                payload:res.data
            })
            console.log(res.data);
            
        }).catch(error => {
            console.log(error.response)
        })
    }
}