import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Favorites from './Favorites'

class ProfilePage extends Component {

    componentDidMount() {
        this.props.profileFetch()
        this.props.favoriteFetch()
    }

    render(){
        const renderFavorites = () => this.props.user.favorites.map(favorite => <Favorites
            key={favorite.id}
            favorite={favorite}
            user={this.props.user}
            deleteFavorite={this.props.deleteFavorite}
            profileFetch={this.props.profileFetch}
            favoriteFetch={this.props.favoriteFetch}
        />)

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
                    <Link to='/profile'>My Profile</Link>
                </div>
            </div>

                <h4> 
                    {this.props.user.username}
                </h4>
                <p>
                    {this.props.user.email}
                <p>
                    {this.props.user.phone_number}
                </p>
                <p>
                    Hobbies: {this.props.user.hobbies}
                </p>
                    {this.props.user.social_level}
                </p>
                <br></br>

            <div>
                {renderFavorites()}
            </div>
        </div>
        )
    }
}

export default ProfilePage;