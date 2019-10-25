import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState=fromJS({
    topicList:[],
    recommendList:[],
    list:[],
    currentPage:1,
    isLoading:false,
    authorList:[]
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case types.BEFORE_QEQUIRE:
            return state.merge({
                isLoading:true
            })
        case types.GET_HOME_LIST:
            return state.merge({
                topicList:fromJS(action.topicList),
                recommendList:fromJS(action.recommendList),
                list:fromJS(action.list),
                isLoading:false,
                authorList:fromJS(action.authorList)
            })
        case types.GET_MORE_lIST:
            return state.merge({
                list:state.get('list').concat(action.list),
                currentPage:action.currentPage
            })
        case types.CHANGE_PAGE:
            return state.merge({
                authorList:fromJS(action.authorList)
            })    
        default:
            return state      
    }
    
}