import { GET_CATEGORY,TRANSACTION_TYPE,ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from './setting-action-type'
import Axios from '../../../config/axios'

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
        }).catch(error => {
            console.log(error);
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
        }).catch(error => {
            console.log(error);
            
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
        }).catch(error => {
            console.log(error);
        })
    }
}