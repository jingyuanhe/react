import * as actionTypes from './actionTypes'
import axios from 'axios'
export const getHomeList=()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            const action={
                type:actionTypes.GET_HOME_LIST,
                topicList:result.topicList,
                recommendList:result.recommendList,
                list:result.list
            }
            dispatch(action)
        })
    }
}