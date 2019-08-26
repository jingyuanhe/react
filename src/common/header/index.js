import React from 'react';
import {HeaderWrapper,Logo,NavWrapper,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'
const Header=(props)=>{
    const {focused,handleFocus,handleBlur}=props;
    return(
        <NavWrapper>
                <HeaderWrapper>
                    <Logo href="/"></Logo>
                    <Nav>
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames='fade'
                            >
                                <NavSearch className={focused?'focused':''} 
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused?'iconfont focused':'iconfont'}>&#xe62b;</i>
                        </SearchWrapper>
                       
                        <NavItem className="right">登陆</NavItem>
                        <NavItem className="right">
                        <i className="iconfont">&#xe609;</i>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <Button className="writting"><i className="iconfont">&#xe600;</i>写文章</Button>
                        <Button className="red">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </NavWrapper>
    )
}
const mapStateToProps=(state)=>{
    return{
        focused:state.get('header').get('focused')
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
        handleFocus(){
            dispatch(actionCreator.inputFocus());
        },
        handleBlur(){
            dispatch(actionCreator.inputBlur());
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header)