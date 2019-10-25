import {fromJS} from 'immutable'
import * as types from './actionTypes'

const defaultData=fromJS({
    auhtorList:[],
    currentPage:1
})
export default (state=defaultData,auction)=>{
    switch(auction.type){
        case types.GET_AUTHOR_LIST:
            return state.merge({
                auhtorList:fromJS(auction.auhtorList)
            })
        case types.GET_MORE_AUTHOR:
            return state.merge({
                currentPage:fromJS(auction.currentPage),
                auhtorList:fromJS(state.get('auhtorList').concat(auction.auhtorList))
            })    
        default:
             return state    
    }
}