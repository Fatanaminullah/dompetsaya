import { GET_DATA,POST_DATA } from './notes-action-type'


const initialState = {
    report : []
}

export default (state=initialState,action) => {
    const {type,payload} = action

    switch (type) {
        case GET_DATA:
            return {...state,report:payload}
        case POST_DATA:
            return {...state,report:payload}
        default:
            return state
    }
}