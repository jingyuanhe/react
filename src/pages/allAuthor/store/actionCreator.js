import * as actionTypes from './actionTypes'
import axios from 'axios'
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