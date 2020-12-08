import React, { Component } from "react";
const usersURL = 'https://home-split-7-10.herokuapp.com/users/'

class Register extends Component {

    state = {
        user: {},
        username: "",
        password: "",
        email: "your_name@gmail.com",
        name: "First Last",
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
    }
    
    render() {
        return (
            <div id="register-header">
                <div className="ui grid">
                        <div className="register-form">        
                            <div className="ui form" onSubmit={this.handleSubmit}>
                                <h2>New User Registration:</h2>
                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Username</label>
                                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Password</label>
                                        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Email</label>
                                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Name</label>
                                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Social Level</label>
                                        <input type="text" name="social_level" value={this.state.social_level} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Hobbies</label>
                                        <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Budget</label>
                                        <input type="text" name="budget" value={this.state.budget} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Current Rent</label>
                                        <input type="text" name="current_rent" value={this.state.current_rent} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Income</label>
                                        <input type="text" name="income" value={this.state.income} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Occupation</label>
                                        <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Lease End</label>
                                        <input type="text" name="lease_end" value={this.state.lease_end} onChange={this.handleChange} />
                                    </div>
                                </div>

                                <div class="fields">
                                    <div className="eight wide field">
                                        <label>Marital Status</label>
                                        <input type="text" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} />
                                    </div>
                                    <div className="eight wide field">
                                        <label>Picture</label>
                                        <input type="text" name="picture" value={this.state.picture} onChange={this.handleChange} />
                                    </div>
                                </div>
                            <input className="ui huge black button" type="submit" value="Register New User"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
