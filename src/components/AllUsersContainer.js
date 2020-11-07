import React, { Component } from "react";
import {Link} from 'react-router-dom'
import SearchContainerUser from './SearchContainerUser'
import AllUser from './AllUser'

class AllUsersContainer extends Component {

    render() {
        const renderUsers = () => this.props.allUsers.map(
            user => <AllUser
                key={user.id}
                user={user}
            />
        )

        return (
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
                    <i className="user icon"></i>
                    <Link to='/all-users'>All Users</Link>
                </div>
            </div>

            <SearchContainerUser 
                filterUsers={this.props.filterUsers}
            />

                <div class="fifteen wide column">
                    <div className="user-cards-container">
                        {renderUsers()}
                    </div>
                </div>
            </div>
        )
    }
}

export default AllUsersContainer;