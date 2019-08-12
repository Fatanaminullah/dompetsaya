import { GET_PROFILE } from './profile-action-type'

const initialState = {
    personalInfo : []
}

export default (state=initialState,action) => {
    const {type,payload} = action
    switch (type) {
        case GET_PROFILE:
            return {...state,personalInfo:payload}
        default:
            return state
    }
}