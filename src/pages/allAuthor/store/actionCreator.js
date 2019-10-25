import * as actionTypes from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'
export const getAuthorList=()=>{
    return (dispatch)=>{
        axios.get('/api/author.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.GET_AUTHOR_LIST,
                auhtorList:result
            }
            dispatch(action);
        })
    }
}
export const getMoreAuthor=(currentPage)=>{
    return (dispatch)=>{
        axios.get('/api/author.json?current='+currentPage).then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.GET_MORE_AUTHOR,
                auhtorList:fromJS(result),
                currentPage:currentPage+1
            }
            dispatch(action);
        })
    }
}