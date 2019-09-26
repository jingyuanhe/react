import * as actionTypes from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
export const inputFocus=()=>({
    type:actionTypes.SEARCH_FOCUS
})
export const inputBlur=()=>({
    type:actionTypes.SEARCH_BLUR
})
export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER
})
export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE
})
export const changePage=(currentPage)=>({
    type:actionTypes.CHANGE_PAGE,
    currentPage
})
const changeList=(data)=>({
    type:actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const getList=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            if(res.data.success){
               dispatch(changeList(res.data.data))
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
}
export const login=()=>{
    
}