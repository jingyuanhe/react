import axios from 'axios'
import * as types from './actionTypes'
export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result=res.data.data;
            const action={
                type:types.GET_DETAIL,
                title:result.title,
                content:result.content
            }
            dispatch(action);
        })
    }
}