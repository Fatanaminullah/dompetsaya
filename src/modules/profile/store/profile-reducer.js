import { GET_PROFILE, EDIT_PROFILE, UPLOAD_AVATAR } from './profile-action-type'

const initialState = {
    personalInfo : []
}

export default (state=initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case GET_PROFILE:
            return {...state,personalInfo:payload}
        case EDIT_PROFILE:
            return {...state,personalInfo:payload}
        case UPLOAD_AVATAR:
            return {...state,personalInfo:payload}
        default:
            return state
    }
}