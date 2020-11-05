import React from 'react'
import {Link} from 'react-router-dom'
import Favorites from './Favorites'

export default function ProfilePage({user}) {    

    const renderFavorites = () => user.favorites.map(favorite => <Favorites
        key={favorite.id}
        favorite={favorite}
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
                    <Link to='/profile'>My Profile</Link>
                </div>
            </div>

                <h4>
                    {user.username}
                </h4>
                <p>
                    {user.email}
                <p>
                    {user.phone_number}
                </p>
                <p>
                    {user.hobbies}
                </p>
                    {user.social_level} social level
                </p>
                <br></br>

            <div>
                {renderFavorites()}
            </div>
        </div>
    )
}