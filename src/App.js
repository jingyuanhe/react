import React,{PureComponent, Fragment} from 'react'
import {GlobalStyle} from './style'
import {Iconfont} from '../src/assets/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
import Home from './pages/Home'
import Detail from './pages/details'
import Login from './pages/login'
import { BrowserRouter,Route} from 'react-router-dom';
export default class App extends PureComponent{
    render(){
        return(
            <Fragment>
                <Iconfont></Iconfont>
                <GlobalStyle></GlobalStyle>
                <Provider store={store}>
                    <div>
                        
                        <BrowserRouter>
                            <Header></Header>
                            <div>
                                <Route exact path='/' component={Home}></Route>
                                <Route exact path='/detail/:id' component={Detail}></Route>
                                <Route exact path='/login' component={Login}></Route>
                            </div>
                        </BrowserRouter>
                    </div>
                    
                </Provider>
                
            </Fragment>
            
        )
    }
}