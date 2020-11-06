import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Favorites from './Favorites'

class ProfilePage extends Component {

    componentDidMount() {
        this.props.profileFetch()
        this.props.favoriteFetch()
    }

    render(){
        const renderFavorites = () => this.props.user.favorites.map(
            favorite => <Favorites
                key={favorite.id}
                favorite={favorite}
                user={this.props.user}
                profileFetch={this.props.profileFetch}
                deleteFavorite={this.props.deleteFavorite}
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
            </div>

            <div className="profile-card">
                <div class="column">
                    <div class="ui two column centered grid">
                        <div class="ui card">
                            <img class="ui medium circular image" src={this.props.user.picture} alt=""></img>
                            <div class="content">
                                <a class="header">{this.props.user.username}</a>
                                <div class="meta">
                                    <span class="date">{this.props.user.email}</span>
                                </div>
                                <div class="description">
                                    {this.props.user.name} enjoys {this.props.user.hobbies} and is a {this.props.user.occupation}.
                                </div>
                            </div>
                            <div class="extra content">
                                <a>
                                    <i class="star icon"></i>
                                    {this.props.user.favorites.length} favorites
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {renderFavorites()}
        </div>
        )
    }
}

export default ProfilePage;