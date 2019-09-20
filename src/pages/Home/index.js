import React,{PureComponent} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommand from './components/Recommand'
import Writer from './components/Writer'

import {connect} from 'react-redux'
import {actionCreator} from './store'
class Home extends PureComponent{
    componentDidMount(){
        this.props.getHomeList();
        
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
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    getHomeList(){
        const action=actionCreator.getHomeList();
        dispatch(action);
    }
})
export default connect(null,mapDispatchToProps)(Home)