import * as types from './actionTypes'
import axios from 'axios'
export const Login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?id='+account+'&password='+password).then((res)=>{
            if(res.data.success){
                const action={
                    type:types.LOGIN,
                }
                dispatch(action);
            }else{
                alert(res.data.msg)
            }
            
        })
    }
}
export const loginOut=()=>{
    return (dispatch)=>{
        const action={
            type:types.LOGINOUT
        }
        dispatch(action);
    }
}