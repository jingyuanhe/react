import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState=fromJS({
    topicList:[],
    recommendList:[],
    list:[]
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case types.GET_HOME_LIST:
            return state.merge({
                topicList:fromJS(action.topicList),
                recommendList:fromJS(action.recommendList),
                list:fromJS(action.list)
            })
        default:
            return state      
    }
    
}