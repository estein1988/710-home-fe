import React, { Component } from 'react'
import coverphoto from './coverphoto.jpg'
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
            <div>
                <div>
                    <img className="cover-photo" src={coverphoto} alt="" />
                </div>

                <div className="login-container">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div class="four fields">
                            
                            <div class="field">
                                <input placeholder='Username' name='username' id='username' value={this.state.username} onChange={this.handleChange} />
                            </div>

                            <div class="field">
                                <input placeholder='Password' name='password' id='password' value={this.state.password} onChange={this.handleChange} />
                            </div>

                            <button class="ui primary button" type='submit' id='submit' value='Login'>
                                Login
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
