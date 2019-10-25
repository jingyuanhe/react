import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommand from './components/Recommand'
import RecommendedAuthor from './components/RecommendedAuthor'
import Download from './components/Download'
import {connect} from 'react-redux'
import {actionCreator} from './store'
class Home extends PureComponent{
    componentDidMount(){
        this.props.getHomeList();
        let _this = this;
        window.addEventListener('scroll',()=>{_this.handleScroll()})
    }
    handleScroll() {
        const {currentPage,getMoreList,isLoading}=this.props;
        const wrapperHeight=document.documentElement.clientHeight || document.body.clientHeight;
        const scrollHeight=document.documentElement.scrollHeight || document.body.scrollHeight;
        const scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop+wrapperHeight+20>=scrollHeight&&!isLoading&&currentPage<5){
            getMoreList(currentPage)
        }
    }
    componentWillUnmount(){
        let _this = this;
        window.removeEventListener('scroll',()=>{_this.handleScroll()},true)
  }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className='banner-img' src='http://upload-images.jianshu.io/upload_images/5303650-16bd31b30bff0a71.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp' alt=""></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommand></Recommand>
                    <Download></Download>
                    <RecommendedAuthor></RecommendedAuthor>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    getHomeList(){
        const action=actionCreator.getHomeList();
        dispatch(action);
    },
    getMoreList(currentPage){
        dispatch(actionCreator.getMoreList(currentPage))
    }
})
const mapStateToProps=(state)=>({
    list:state.getIn(['home','list']),
    isLoading:state.getIn(['home','isLoading']),
    currentPage:state.getIn(['home','currentPage'])
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)