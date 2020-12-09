import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

export default class EditProfile extends Component {

    state = {
        // user: this.props.state.user,
        username: this.props.user.username,
        password: this.props.user.password,
        email: this.props.user.email,
        name: this.props.user.name,
        phone_number: this.props.user.phone_number,
        social_level: this.props.user.social_level,
        hobbies: this.props.user.hobbies,
        budget: this.props.user.budget,
        current_rent: this.props.user.current_rent,
        income: this.props.user.income,
        occupation: this.props.user.occupation,
        lease_end: this.props.user.lease_end,
        marital_status: this.props.user.marital_status,
        picture: this.props.user.picture
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateProfile(this.state.allUsers)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
        <div>
            <div className="profile-card">
                <div className="column">
                    <div className="ui two column centered grid">
                        <div className="ui card">
                            <img className="ui medium circular image" src={this.props.user.picture} alt=""></img>
                                <div className="content">
                                <div className="ui form" onSubmit={this.handleSubmit}>
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
                                        <label>Lease-end</label>
                                        <input type="text" name="lease_end" value={this.state.lease_end} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Marital Status</label>
                                        <input type="text" name="marital_status" value={this.state.marital_status} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Hobbies</label>
                                        <input type="text" name="hobbies" value={this.state.hobbies} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Social Level</label>
                                        <input type="text" name="social_level" value={this.state.social_level} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <input className="ui black button" type="submit" value="Submit Changes"/>
                                <button className="ui green button" onClick={this.props.handleToggle}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}