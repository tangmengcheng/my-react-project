import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component{
    componentDidMount() {
        axios.get('http://localhost:3000/api/user').then(res => {
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                this is home page.
            </div>
        )
    }
}