import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import { increment,decrement, reset } from 'actions/counter'

class Counter extends Component{

    render() {
        return (
            <div>
                <span>当前计数值为：{this.props.counter.count}</span>
                <button onClick={() => this.props.increment()}>增加</button>
                <button onClick={() => this.props.decrement()}>减少</button>
                <button onClick={() => this.props.reset()}>重置</button>
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}

export default connect(state => state, dispatch => ({
    increment: () => {
        dispatch(increment())
    },
    decrement: () => {
        dispatch(decrement())
    },
    reset: () => {
        dispatch(reset())
    }
}))(Counter)