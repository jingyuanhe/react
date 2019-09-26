import React,{PureComponent} from 'react';
import {connect} from 'react-redux'
import {LoginWrapper,LoginMain,LoginInfo,LoginButton} from './style'
class Login extends PureComponent{
    render(){
        return (
            <LoginWrapper>
                <LoginMain>
                    <LoginInfo>
                        <input type="text" placeholder='请输入用户名'></input>
                        <input type="password" placeholder='请输入密码'></input>
                    </LoginInfo>
                    <LoginButton>登陆</LoginButton>
                </LoginMain>
            </LoginWrapper>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    
})
export default connect(null,mapDispatchToProps)(Login)