import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

export default class Login extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div id="header">
                <div className='login-container'>
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="four fields">
                            
                            <div className="field">
                                <input placeholder='Username' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                            </div>

                            <div className="field">
                                <input type="password" placeholder='Password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                            </div>

                            <button className="ui primary button" type='submit' id='submit' value='Login'>
                                Login
                            </button>

                            <button className="ui red button">
                                <Link id="register-button" to='/register'>Register New Account</Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
