import React,{PureComponent, Fragment} from 'react'
import {GlobalStyle} from './style'
import {Iconfont} from '../src/assets/iconfont/iconfont'
import Header from './common/header'
import store from './store'
import {Provider} from 'react-redux'
import Home from './pages/Home'
import Detail from './pages/details'
import Login from './pages/login'
import Write from './pages/write'
import DownloadApp from './pages/downloadApp'
import AuthorDetail from './pages/authorDetail'
import AllAuthor from './pages/allAuthor'
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
                                <Route exact path='/write' component={Write}></Route>
                                <Route exact path='/downloadApp' component={DownloadApp}></Route>
                                <Route exact path='/authorDetail' component={AuthorDetail}></Route>
                                <Route exact path='/allAuthor' component={AllAuthor}></Route>
                            </div>
                        </BrowserRouter>
                    </div>
                    
                </Provider>
                
            </Fragment>
            
        )
    }
}