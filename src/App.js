import React,{Component, Fragment} from 'react'
import {GlobalStyle} from './style'
import {Iconfont} from '../src/assets/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
export default class App extends Component{
    render(){
        return(
            <Fragment>
                <Iconfont></Iconfont>
                <GlobalStyle></GlobalStyle>
                <Provider store={store}>
                    <Header></Header>
                </Provider>
                
            </Fragment>
            
        )
    }
}