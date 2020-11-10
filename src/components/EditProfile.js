import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from 'react-router-dom'

export default class EditProfile extends Component {

    // handleSubmit = (event) => {
    //     event.preventDefault()
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
            <div className="ui inverted blue secondary pointing menu">
                <div className="header item">
                    {/* {this.props.user.username}  */}
                </div>
                <div className="blue header item">
                    <i className="home icon"></i>
                    <Link to='/'>Home</Link>
                </div>
                <div className="header item">
                    <i className="calculator icon"></i>
                    <Link to='/rates'>Mortgage Calculator</Link>
                </div>
                <div className="header item">
                    <i className="user icon"></i>
                    <Link to='/user-profile'>My Profile</Link>
                </div>
                <div className="header item">
                    <i className="user plus icon"></i>
                    <Link to='/all-users'>All Users</Link>
                </div>
                <div className="header item">
                        <i onClick={this.props.logout} className="sign out icon"></i>
                        <p>Logout</p>
                </div>
            </div>
            <div className="profile-card">
                <div class="column">
                    <div class="ui two column centered grid">
                        <div class="ui card">
                            <img class="ui medium circular image" src={this.props.user.picture} alt=""></img>
                                <div class="content">
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
                            {/* {this.props.favorites.length} favorites */}
                            {/* <button className="edit-button" onClick={handleClick}>Edit Profile</button> */}
                            {/* <button onClick={handleToggle}>Edit Profile</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}