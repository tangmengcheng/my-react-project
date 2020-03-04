import React from 'react'
import { Route, Switch } from 'react-router-dom'

// 引入页面
import Home from './pages/home/index'
import Page from './pages/page/index'

// 路由
const getRouter = () => {
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Page} />
    </Switch>
}

export default getRouter;