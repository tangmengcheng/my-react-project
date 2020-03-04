import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page">Page页</Link></li>
                <li><Link to="/counter">计数页</Link></li>
                <li><Link to="/userinfo">用户信息</Link></li>
            </ul>
        </div>
    )
}