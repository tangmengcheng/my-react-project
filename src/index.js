import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import '../mock/mock'
import Nav from 'components/Nav/index'
import 'antd/dist/antd.css';
import getRouter from './router'
// import Home from "pages/home/index"
// import Page from "pages/page/index"
// import Counter from 'pages/counter/index'

import loadable from 'react-loadable'
import Loading from 'components/Loading'

const Home = loadable({
    loader: () => import('pages/home/index'),
    loading: Loading,
    timeout: 10000 // 10 seconds
})

const Page = loadable({
    loader: () => import('pages/page/index'),
    loading: Loading,
    timeout: 10000
})

const Counter = loadable({
    loader: () => import('pages/counter/index'),
    loading: Loading,
    timeout: 10000
})

const NotFound = loadable({
    loader: () => import('pages/notfound/index'),
    loading: Loading,
    timeout: 10000
})

const UserInfo = loadable({
    loader: () => import('pages/userInfo/index'),
    loading: Loading,
    timeout: 10000
})



import store from './redux/store'
// import Hello from './components/Hello'

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Nav/>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
            <Route path="/counter" component={Counter} />
            <Route path="/userinfo" component={UserInfo} />
            <Route component={NotFound}/>
            {/*{getRouter()}*/}
        </Router>
    </Provider>,
    document.getElementById('app')
)
//
// ReactDom.render(
//     <div>Hello React!</div>,
//     document.getElementById('app')
// )
// let fun = str => {
//     document.getElementById('app').innerHTML = str
// }
//
// fun('我现在开始使用Babel来解析ES6或更高的版本了')
