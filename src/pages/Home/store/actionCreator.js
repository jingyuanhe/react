import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const getHomeList=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.GET_HOME_LIST,
                topicList:result.topicList,
                recommendList:result.recommendList,
                list:result.list,
                authorList:result.authorList
            }
            dispatch(action)
        })
    }
}
const addHomeList=(list,currentPage)=>({
    type:actionTypes.GET_MORE_lIST,
    list:fromJS(list),
    currentPage
})
const beforeQequire=()=>({
    type:actionTypes.BEFORE_QEQUIRE,
    isLoading:true
})
export const getMoreList=(currentPage)=>{
    return (dispatch)=>{
        dispatch(beforeQequire)
        axios.get('/api/getList.json?current='+currentPage).then((res)=>{
            dispatch(addHomeList(res.data.data,currentPage+1))
        })  
    }
}
export const pageChange=()=>{
    return (dispatch)=>{
        axios.get('/api/recommended.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.CHANGE_PAGE,
                authorList:result
            }
            dispatch(action)
        })
    }
}