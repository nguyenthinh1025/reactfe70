import React, { Component } from 'react'

export default class HandleEventRcc extends Component {

    showMess = () => {
        alert('a');
    }
    render () {

        const change = (name) => {
            alert('name : ' + name);
        }
        return (
            <div className='container'>
                <button onClick={this.showMess}> show message</button>
                <button onClick={() => {
                    change('thinh');
                }} >Click me</button>
            </div>

        )
    }
}
