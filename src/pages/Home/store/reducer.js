import {fromJS} from 'immutable'
const defaultState=fromJS({
    list:[{
        id:1,
        title:'社会热点'
    }],
})
export default (state=defaultState,action)=>{
    return state  
}