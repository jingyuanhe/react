import React,{PureComponent} from 'react';
import {connect} from 'react-redux'
import {LoginWrapper,LoginMain,LoginInfo,LoginButton} from './style'
import {actionCreator} from './store'
import {Redirect} from 'react-router-dom'
class Login extends PureComponent{
    render(){
        const {handelLogin,isLogin}=this.props;
        if(isLogin){
            return <Redirect to='/'></Redirect>
        }else{
            return (
                <LoginWrapper>
                    <LoginMain>
                        <LoginInfo>
                            <input type="text" placeholder='请输入用户名' ref={(input)=>this.input=input}></input>
                            <input type="password" placeholder='请输入密码' ref={(input)=>this.password=input}></input>
                        </LoginInfo>
                        <LoginButton onClick={()=>{handelLogin(this.input,this.password)}}>登陆</LoginButton>
                    </LoginMain>
                </LoginWrapper>
            )
        }
    }
}
const mapDispatchToProps=(dispatch)=>({
    handelLogin(inputEle,passwordEle){
        dispatch(actionCreator.Login(inputEle.value,passwordEle.value))
    }
})
const mapStateToProps=(state)=>({
    isLogin:state.getIn(['login','isLogin'])
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)