import React, { Component } from 'react'

export default class LoginForm extends Component {
    state = {
        login: false,
    }

    name = ' thinh';


    clickName = () => {
        if (this.state.login) {
            return alert('name' + this.name);
        }
        return <button onClick={this.handleLogin}>Login</button>
    }
    handleLogin = () => {

        this.setState({
            login: true,

        }, () => {
            console.log(this.state.login)
        })



    }
    render () {
        return (
            <div className='container'>
                {this.clickName()}
            </div>
        )
    }
}
