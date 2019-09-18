import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recommand from './components/Recommand'
import Writer from './components/Writer'
export default class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className='banner-img' src='//upload-images.jianshu.io/upload_images/3459828-fdf30bf7e301a6e9.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/933/format/webp'></img>
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