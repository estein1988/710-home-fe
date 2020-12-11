import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import EditProfile from './EditProfile'
import Favorites from './Favorites'

export default function ProfilePage({fetchModels, user, allUsers, favorites, deleteFavorite, updateProfile, logout}){
    
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
        <div className="ui large inverted blue secondary pointing menu">
            <div id="avatar-image">
                <img className="ui mini circular image" src={user.picture} alt=""></img>
            </div>
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
                <Link to='/login'></Link>
                <p>Logout</p>
            </div>
        </div>
        <div className="profile-card">
            <div className="column">
                <div className="ui two column centered grid">
                    <div className="ui card">
                        <img className="ui medium circular image" src={user.picture} alt=""></img>
                        <div className="content">
                            <a className="header">{user.username}</a>
                            <div className="meta">
                                <span className="date">{user.email}</span>
                            </div>
                            <div className="description">
                                {user.name} enjoys {user.hobbies} and is a {user.occupation}.
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                                <i className="star icon"></i>
                                {favorites.length} favorites
                            </a>
                            <button id="edit-profile-button" className="ui green button" onClick={handleToggle}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sixteen wide column">
            <div className="favorites-container">
                {user.favorites ? renderFavorites() : null}
            </div>
        </div>
    </div>
    )
    return isToggled 
        ? <EditProfile 
                user={user} 
                allUsers={allUsers}
                handleToggle={handleToggle} 
                updateProfile={updateProfile}
            /> 
        : profileCard()
}