import { GET_DATA } from './notes-action-type'
import Axios from 'axios';

export const getData = (userid) => {
    return async dispatch => {
        await Axios.get(`http://localhost:6666/showreport/${userid}`).then(res => {
            dispatch({
                type : GET_DATA,
                payload:res.data
            })
        }).catch(error => {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data+ "data");
                console.log(error.response.status + "status");
                console.log(error.response.headers + "header");
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }
}