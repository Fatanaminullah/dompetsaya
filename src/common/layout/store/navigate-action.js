import {  push } from 'react-router-redux'

export const navigate = (key,url) => {
    return (dispatch)=>{
        dispatch(push(url))
    }
  }