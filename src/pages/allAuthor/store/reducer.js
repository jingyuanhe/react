import {fromJS} from 'immutable'
import * as types from './actionTypes'

const defaultData=fromJS({
    auhtorList:[]
})
export default (state=defaultData,auction)=>{
    switch(auction.type){
        case types.GET_AUTHOR_LIST:
            return state.merge({
                auhtorList:fromJS(auction.auhtorList)
            })
        default:
             return state    
    }
}