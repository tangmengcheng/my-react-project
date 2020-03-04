import React, { Component } from 'react'
import style from  './index.css'
import pic from 'images/bg33.png'
export default class Page extends Component{
    render() {
        return (
            <div className={style["page-box"]}>
                this is page page.
                <img src={pic}/>
            </div>
        )
    }
}