import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'

export default class EditProfile extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
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
                                <form className="ui form" onSubmit={this.props.updateProfile}>
                                    <div className="field">
                                        <label>Budget</label>
                                        <input type="text" name="budget" value={this.props.user.budget} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Current Rent</label>
                                        <input type="text" name="current_rent" value={this.props.user.current_rent} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Income</label>
                                        <input type="text" name="income" value={this.props.user.income} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Occupation</label>
                                        <input type="text" name="occupation" value={this.props.user.occupation} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Lease-end</label>
                                        <input type="text" name="lease_end" value={this.props.user.lease_end} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Marital Status</label>
                                        <input type="text" name="marital_status" value={this.props.user.marital_status} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Hobbies</label>
                                        <input type="text" name="hobbies" value={this.props.user.hobbies} onChange={this.handleChange} />
                                    </div>
                                    <div className="field">
                                        <label>Social Level</label>
                                        <input type="text" name="social_level" value={this.props.user.social_level} onChange={this.handleChange} />
                                    </div>
                                </form>
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