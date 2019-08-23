import React,{Component, Fragment} from 'react'
import {GlobalStyle} from './style'
import {Iconfont} from '../src/assets/iconfont/iconfont'
import Header from './common/header'
export default class App extends Component{
    render(){
        return(
            <Fragment>
                <Iconfont></Iconfont>
                <GlobalStyle></GlobalStyle>
                <Header></Header>
            </Fragment>
            
        )
    }
}