import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {

    state = {
        size: 17
    }

    handleSetSize = (setSize) => {
        this.setState({
            size: this.state.size + setSize,
        })
    }
    render () {
        return (
            <div className='container'>
                <h3 style={{ fontSize: `${this.state.size}px` }}>Bai tập tăng giảm font size</h3>
                <button className='btn btn-outline-success' onClick={() => {
                    this.handleSetSize(1)
                }}>+</button>
                <button className='btn btn-outline-danger ml-2' onClick={() => {
                    this.handleSetSize(-1)
                }}>-</button>
            </div>
        )
    }
}
