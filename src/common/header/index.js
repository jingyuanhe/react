import React,{Component} from 'react';
import {HeaderWrapper,Logo,NavWrapper,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
export default class Header extends Component{
    render(){
        return(
            <NavWrapper>
                <HeaderWrapper>
                    <Logo href="/"></Logo>
                    <Nav>
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <SearchWrapper>
                            <NavSearch></NavSearch>
                            <i className="iconfont">&#xe62b;</i>
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
}