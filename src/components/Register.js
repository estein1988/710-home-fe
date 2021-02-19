import React, { Component } from "react";
import { Link } from 'react-router-dom'

const usersURL = 'https://home-split-7-10.herokuapp.com/users/'

class Register extends Component {

    state = {
        user: {},
        username: "",
        password: "",
        email: "@gmail.com",
        name: "",
        phone_number: "(303) 555-1234",
        social_level: "Moderate",
        hobbies: "",
        budget: "$410000",
        current_rent: "$1200",
        income: "$80000",
        occupation: "Software Developer",
        lease_end: "3/1/2021",
        marital_status: "Single",
        picture: "https://www.cheatsheet.com/wp-content/uploads/2019/04/Johns-Avatar.jpg",
        errorMessage: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(usersURL, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {username: this.state.username, 
                password: this.state.password, 
                email: this.state.email, 
                name: this.state.name, 
                phone_number: this.state.phone_number, 
                social_level: this.state.social_level, 
                hobbies: this.state.hobbies,         
                current_rent: this.state.current_rent,
                income: this.state.income,
                budget: this.state.budget,
                occupation: this.state.occupation,
                lease_end: this.state.lease_end,
                marital_status: this.state.marital_status,
                picture: this.state.picture}
            )
        })
        .then(response => response.status === 400 
            ? this.setState({errorMessage: 'User already exists; password or email blank'}) 
            : this.setState({errorMessage: 'User Created Successfully'})
        )
    }
    
    render() {
        return (
            <div id="register-header">
                <div className="ui grid">
                        <div className="register-form">        
                            <form className="ui form" onSubmit={this.handleSubmit}>
                                <h2>New User Registration:</h2>
                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Username</label>
                                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Password</label>
                                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Full Name</label>
                                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                    </div>

                                    <div className="eight wide field">
                                        <label>Hobbies</label>
                                        <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Social Level</label>
                                        <select onChange={e => this.setState({social_level: e.target.value})}>
                                            <option value="Low: Homebody to the fullest extent">Low</option>
                                            <option value="Moderate: Socially active on weekends only">Moderate</option>
                                            <option value="High: Tuesdays are my favorite night out">High</option>
                                        </select>
                                    </div>

                                    <div className="eight wide field">
                                    <label>Budget</label>
                                        <select onChange={e => this.setState({budget: e.target.value})}>
                                            <option value="$299,999">$200,000 - $299,999</option>
                                            <option value="$399,999">$300,000 - $399,999</option>
                                            <option value="$499,999">$400,000 - $499,999</option>
                                            <option value="$599,999">$500,000 - $599,999</option>
                                            <option value="$699,999">$600,000 - $699,999</option>
                                            <option value="$799,999">$700,000 - $799,999</option>
                                            <option value="$899,999">$800,000 - $899,999</option>
                                            <option value="$999,999">$900,000 - $999,999</option>
                                            <option value="$2,999,999">$999,999+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Current Rent</label>
                                            <select onChange={e => this.setState({current_rent: e.target.value})}>
                                                <option value="$600 - $699">$600 - $699</option>
                                                <option value="$700 - $799">$700 - $799</option>
                                                <option value="$800 - $899">$800 - $899</option>
                                                <option value="$900 - $999">$900 - $999</option>
                                                <option value="$1,000 - $1,099">$1,000 - $1,099</option>
                                                <option value="$1,100 - $1,199">$1,100 - $1,199</option>
                                                <option value="$1,200 - $1,299">$1,200 - $1,299</option>
                                                <option value="$1,300 - $1,399">$1,300 - $1,399</option>
                                                <option value="$1,400 - $1,499">$1,400 - $1,499</option>
                                                <option value="$1,500+">$1,500+</option>
                                            </select>
                                    </div>

                                    <div className="eight wide field">
                                        <label>Income</label>
                                            <select onChange={e => this.setState({income: e.target.value})}>
                                                <option value="$30,000 - $59,999">$30,000 - $59,999</option>
                                                <option value="$60,000 - $99,999">$60,000 - $99,999</option>
                                                <option value="$100,000 - $149,999">$100,000 - $149,999</option>
                                                <option value="$150,000+">$150,000+</option>
                                            </select>
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Occupation</label>
                                        <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Lease End</label>
                                        <input type="text" name="lease_end" value={this.state.lease_end} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div className="fields">
                                    <div className="eight wide field">
                                        <label>Marital Status</label>
                                            <select onChange={e => this.setState({marital_status: e.target.value})}>
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorced">Divorced</option>
                                                <option value="Widowed">Widowed</option>
                                                <option value="Separated">Separated</option>
                                            </select>
                                        </div>
                                    <div className="eight wide field">
                                        <label>Picture</label>
                                        <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
                                    </div>
                                </div>
                            <input className="ui huge black button" type="submit" value="Register New User"/>
                        </form>
                        <div>
                            <h3 className={this.state.errorMessage === 'User Created Successfully' ? 'greenMessage' : 'redMessage'} id='registration-message'>{this.state.errorMessage}</h3>
                        </div>
                        <div>
                            <button className="ui massive green button">
                            <Link id="back-to-login" to='/login'>Back To Login</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
