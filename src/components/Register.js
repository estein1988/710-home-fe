import React, { Component } from "react";
const usersURL = 'http://localhost:8000/users/'

class Register extends Component {

    state = {
        user: {},
        username: "",
        password: "",
        email: "",
        name: "",
        phone_number: "",
        social_level: "",
        hobbies: "",
        budget: "",
        current_rent: "",
        income: "",
        occupation: "",
        lease_end: "",
        marital_status: "",
        picture: "",
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
                // 'Authorization': `Bearer ${localStorage.token}`,
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
    }

    render() {
        return (
            <div>
                <div class="ui grid">
                    <div class="five wide column">
                        <div className="individual-calculator">        
                            <form className="ui form" onSubmit={this.handleSubmit}>

                                <div className="field">
                                    <label>Username</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Password</label>
                                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Email</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Phone Number</label>
                                    <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Social Level</label>
                                    <input type="text" name="social_level" value={this.state.social_level} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Hobbies</label>
                                    <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Budget</label>
                                    <input type="text" name="budget" value={this.state.budget} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Current Rent</label>
                                    <input type="text" name="current_rent" value={this.state.current_rent} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Income</label>
                                    <input type="text" name="income" value={this.state.income} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Occupation</label>
                                    <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Lease End</label>
                                    <input type="text" name="lease_end" value={this.state.lease_end} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Marital Status</label>
                                    <input type="text" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} />
                                </div>

                                <div className="field">
                                    <label>Picture</label>
                                    <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
                                </div>

                                <input className="ui black button" type="submit" value="Register User"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;