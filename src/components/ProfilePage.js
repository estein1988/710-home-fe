import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import EditProfile from './EditProfile'
import Favorites from './Favorites'

export default function ProfilePage({fetchModels, user, favorites, deleteFavorite, updateProfile, logout}){
    
    useEffect(() => {
        fetchModels()
    }, [])
        
    const handleToggle = (event) => setIsToggled(!isToggled)
    const [isToggled, setIsToggled] = useState(false)

    const renderFavorites = () => favorites.map(
        favorite => <Favorites
            key={favorite.id}
            favorite={favorite}
            fetchModels={fetchModels}
            deleteFavorite={deleteFavorite}
        />
    )

    const profileCard = () => (
        <div>
        <div className="ui inverted blue secondary pointing menu">
            <div className="header item">
                {user.username} 
            </div>
            <div className="blue header item">
                <i className="home icon"></i>
                <Link to='/'>Home Listings</Link>
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
                <i onClick={logout} className="sign out icon"></i>
                <p>Logout</p>
            </div>
        </div>
        <div className="profile-card">
            <div class="column">
                <div class="ui two column centered grid">
                    <div class="ui card">
                        <img class="ui medium circular image" src={user.picture} alt=""></img>
                        <div class="content">
                            <a class="header">{user.username}</a>
                            <div class="meta">
                                <span class="date">{user.email}</span>
                            </div>
                            <div class="description">
                                {user.name} enjoys {user.hobbies} and is a {user.occupation}.
                            </div>
                        </div>
                        <div class="extra content">
                            <a>
                                <i class="star icon"></i>
                                {favorites.length} favorites
                            </a>
                            {/* <button className="edit-button" onClick={handleClick}>Edit Profile</button> */}
                            <button id="edit-profile-button" class="ui green button" onClick={handleToggle}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sixteen wide column">
            <div className="favorites-container">
                {user.favorites ? renderFavorites() : null}
            </div>
        </div>
    </div>
    )
    return isToggled 
        ? <EditProfile 
                user={user} 
                handleToggle={handleToggle} 
                updateProfile={updateProfile}
            /> 
        : profileCard()
}