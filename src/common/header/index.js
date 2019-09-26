import React,{Component} from 'react';
import {TopWrapper,HeaderWrapper,Logo,NavWrapper,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem} from './style'
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {actionCreator as loginActionCreator} from '../../pages/login/store'
import {Link } from "react-router-dom";
class Header extends Component{
    getListArea(){
        const {focused,list,mouseIn,currentPage,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage}=this.props;
        const newList=list.toJS();
        const pageList=[];
        if(newList.length){
            for(let i=(currentPage-1)*10;i<currentPage*10;i++){
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        
        if(focused||mouseIn){
            return(
                    <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <SearchInfoTitle>
                            热门搜索
                             <SearchInfoSwitch onClick={()=>{handleChangePage(currentPage,totalPage)}}>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <div>
                            {
                                pageList
                            }
                        </div>
                    </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const {focused,handleFocus,handleBlur,list,isLogin,loginOut}=this.props;
    return(
        <TopWrapper>
        <NavWrapper>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo></Logo>
                    </Link>
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
                                onFocus={()=>{handleFocus(list)}}
                                onBlur={handleBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused?'iconfont focused':'iconfont'}>&#xe62b;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                        {
                            isLogin?<NavItem className="right" onClick={()=>{loginOut()}}>退出</NavItem>:
                            <Link to='/login'><NavItem className="right">登陆</NavItem></Link>
                        }
                        
                        <NavItem className="right">
                        <i className="iconfont">&#xe609;</i>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className="writting"><i className="iconfont">&#xe600;</i>写文章</Button>
                        </Link>
                        
                        <Button className="red">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </NavWrapper>
            </TopWrapper>
    )
    }
}
const mapStateToProps=(state)=>{
    return{
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        mouseIn:state.getIn(['header','mouseIn']),
        currentPage:state.getIn(['header','currentPage']),
        totalPage:state.getIn(['header','totalPage']),
        isLogin:state.getIn(['login','isLogin'])
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
        loginOut(){
            dispatch(loginActionCreator.loginOut())
        },
        handleFocus(list){
            list.size===0&&dispatch(actionCreator.getList());
            dispatch(actionCreator.inputFocus());
        },
        handleBlur(){
            dispatch(actionCreator.inputBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreator.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreator.mouseLeave())
        },
        handleChangePage(currentPage,totalPage){
            if(currentPage<totalPage){
                dispatch(actionCreator.changePage(currentPage+1))
            }else{
                dispatch(actionCreator.changePage(1))
            }
            
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header)