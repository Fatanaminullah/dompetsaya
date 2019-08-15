import { GET_PROFILE, EDIT_PROFILE, UPLOAD_AVATAR } from './profile-action-type'
import Axios from '../../../config/axios'
import { success,error } from '../../../common/general-component/message/alertMessage'
import Cookies from 'universal-cookie';

const cookie = new Cookies()

export const getProfile = (id) => {
    return async dispatch => {
        await Axios.get(`/users/profile/${id}`).then(res => {
            dispatch({
                type:GET_PROFILE,
                payload:res.data
            })
        }).catch(error => {
            console.log(error.response.message)
            error("Failed to Load your Profile")
        })
    }
}


export const editProfile = (id,nama_depan,nama_belakang,username,email,kelahiran,gender) => {
    return dispatch => {
        Axios.patch(`/users/edit/${id}`,{
            nama_depan,nama_belakang,username,email,kelahiran,gender
        }).then(res => {
            cookie.set('username',res.data[0].username,{path:'/'})
            dispatch({
                type:EDIT_PROFILE,
                payload:res.data
            })
            success("Profile Updated",5)
        }).catch(error => {
            console.log(error.response);
            error(error.response.message,5)
        })
    }
}
export const editAddress = (id,alamat,kota,negara,nomor_telepon) => {
    return dispatch => {
        Axios.patch(`/users/edit/${id}`,{
            alamat,kota,negara,nomor_telepon
        }).then(res => {
            dispatch({
                type:EDIT_PROFILE,
                payload:res.data
            })
            success("Profile Updated",5)
        }).catch(error => {
            error(error.response.message,5)
            console.log(error.response);
        })
    }
}

export const uploadAvatar = (id,imagefile) => {
    const formData = new FormData();
    
    formData.append("foto_profil", imagefile);
    
    return dispatch => {
        try {
            const res = Axios.post(
                `/avatar/upload/${id}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
                )
                dispatch({
                    type: UPLOAD_AVATAR,
                    payload:res.data
                });
                success("Profile Updated",5)
            } catch (e) {
                console.log("upload gagal" + e);
                error(e.response.message,5)
            }
        }
}