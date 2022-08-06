import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {


    state = {
        mauXe: './products/black-car.jpg'
    }

    handleChangeColor = (mauClick) => {
        this.setState({
            mauXe: `./products/${mauClick}-car.jpg`,
        })
    }
    render () {

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.state.mauXe} className='w-100' />
                    </div>
                    <div className='col-6'>
                        <button className='m-3' style={{ color: 'black' }} onClick={() => {
                            this.handleChangeColor('red')
                        }}>Black Car</button>
                        <button style={{ color: 'gray' }}>Steel Car</button>
                        <button className='m-3' style={{ color: 'silver' }}>Silver Car</button>
                        <button style={{ color: 'red' }}>Red Car</button>
                    </div>
                </div>
            </div>
        )
    }
}
