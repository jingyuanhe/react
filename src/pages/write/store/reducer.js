import {fromJS} from 'immutable'
import * as types from './actionTypes'
const defaultState=fromJS({
  isLogin:false
})
export default (state=defaultState,action)=>{
  switch(action.type){
    case types.LOGIN:
      return state.merge({
            isLogin:true
          })
    case types.LOGINOUT:
      return state.merge({
        isLogin:false
      }) 
    default:
      return state
  }
   
}