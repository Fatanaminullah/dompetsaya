import { GET_CATEGORY, TRANSACTION_TYPE,ADD_CATEGORY,DELETE_CATEGORY, EDIT_CATEGORY } from './setting-action-type'

const initialState = {
    master_kategori : [],
    transaction_type : []
}

export default (state=initialState,action) => {
    const { type,payload } = action
    switch (type) {
        case GET_CATEGORY:
            return {...state,master_kategori:payload}
        case TRANSACTION_TYPE:
            return {...state,transaction_type:payload}
        case ADD_CATEGORY:
            return {...state,master_kategori:payload}
        case DELETE_CATEGORY:
            return {...state,master_kategori:payload}
        case EDIT_CATEGORY:
            return{...state,master_kategori:payload}
        default:
            return state
    }
}