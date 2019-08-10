import { GET_DATA } from './notes-action-type'


const initialState = {
    data : []
}

export default (state=initialState,action) => {
    const {type,payload} = action

    switch (type) {
        case GET_DATA:
            return {...state,data:payload}
        default:
            return state
    }
}