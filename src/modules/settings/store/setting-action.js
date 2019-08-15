import { GET_CATEGORY,TRANSACTION_TYPE,ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from './setting-action-type'
import Axios from '../../../config/axios'
import { success,error } from '../../../common/general-component/message/alertMessage'

export const getCategory = () => {
    return async dispatch => {
        await Axios.get(`/category/show`).then(res => {
            dispatch({
                type : GET_CATEGORY,
                payload : res.data
            })
        }).catch(error => {
            console.log(error.config);
            
        })
    }
}

export const getTransaction = () => {
    return async dispatch => {
        await Axios.get('/transactiontype').then(res => {
            dispatch({
                type: TRANSACTION_TYPE,
                payload: res.data
            })
        }).catch(error =>{
            console.log(error);
            
        })
    }
}

export const addCategory = (jenis_transaksi,nama_kategori) => {
    return dispatch => {
        Axios.post(`/category/add`,{
            jenis_transaksi,nama_kategori
        }).then(res => {
            dispatch({
                type:ADD_CATEGORY,
                payload:res.data
            })
            success("Category Successfully Added",5)
        }).catch(error => {
            console.log(error);
            error(error.response.message,5)
        })
    }
}

export const deleteCategory = (id) => {
    return dispatch => {
        Axios.delete(`/category/delete/${id}`).then(res => {
            dispatch({
                type:DELETE_CATEGORY,
                payload:res.data
            })
            success("Category Successfully Deleted",5)
        }).catch(error => {
            console.log(error);
            error(error.response.message,5)
        })
    }
        
}

export const editCategory = (id,jenis_transaksi,nama_kategori) => {
    return dispatch => {
        Axios.patch(`/category/edit/${id}`,{
            jenis_transaksi,
            nama_kategori
        }).then(res => {
            dispatch({
                type:EDIT_CATEGORY,
                payload:res.data
            })
            success("Category Successfully Edited",5)
        }).catch(error => {
            console.log(error);
            error(error.response.message,5)
        })
    }
}