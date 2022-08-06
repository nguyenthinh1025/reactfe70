import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'iphone', price: 2000, img: 'https://picsum.photos/id/1/200' },
        { id: 2, name: 'SamSung', price: 3000, img: 'https://picsum.photos/id/2/200' },
        { id: 3, name: 'Oppo', price: 4000, img: 'https://picsum.photos/id/3/200' },
    ]
    render () {
        return (
            <div className='container'>
                <div className='row'>
                    {this.arrProduct.map((item, index) => {
                        return <div className='card' key={index}>
                            <img src={item.img} />
                            <div className='card-body'>
                                <p>Name:{item.name}</p>
                                <p>Price :{item.price}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
