import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import EditProfile from './EditProfile'
import Favorites from './Favorites'

export default function ProfilePage({user, profileFetch, deleteFavorite, updateProfile, logout}){

    const [isToggled, setIsToggled] = useState(false)

    const handleToggle = (event) => setIsToggled(!isToggled)

    const renderFavorites = () => user.favorites.map(
        favorite => <Favorites
            key={favorite.id}
            favorite={favorite}
            // user={user}
            profileFetch={profileFetch}
            deleteFavorite={deleteFavorite}
        />
    )

    const profileCard = () => (
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
                                {/* {user.favorites.length} favorites */}
                            </a>
                            {/* <button className="edit-button" onClick={handleClick}>Edit Profile</button> */}
                            <button onClick={handleToggle}>Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sixteen wide column">
                <div className="favorites-container">
                    {renderFavorites()}
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


// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import Favorites from './Favorites'
// import EditProfile from './EditProfile'

// class ProfilePage extends Component {

//     state = {
//         isToggled: false
//     }

//     componentDidMount() {
//         this.props.profileFetch()
//         this.props.favoriteFetch()
//         this.props.homeFetch()
//     }

//     // componentDidUpdate() {
//     //     if(localStorage.token && this.props.user === 0) {
//     //         this.props.profileFetch()
//     //         this.props.favoriteFetch()
//     //         this.props.homeFetch()
//     //     }
//     // }
    
//     render(){
//         // const handleClick = (event) => editProfile(id)
        
//         const renderFavorites = () => this.props.user.favorites.map(
//             favorite => <Favorites
//                 key={favorite.id}
//                 favorite={favorite}
//                 user={this.props.user}
//                 profileFetch={this.props.profileFetch}
//                 deleteFavorite={this.props.deleteFavorite}
//             />
//         )

//     return (
//         <div>
//             <div className="ui inverted blue secondary pointing menu">
//                 <div className="header item">
//                     {/* {this.props.user.username}  */}
//                 </div>
//                 <div className="blue header item">
//                     <i className="home icon"></i>
//                     <Link to='/'>Home</Link>
//                 </div>
//                 <div className="header item">
//                     <i className="calculator icon"></i>
//                     <Link to='/rates'>Mortgage Calculator</Link>
//                 </div>
//                 <div className="header item">
//                     <i className="user icon"></i>
//                     <Link to='/user-profile'>My Profile</Link>
//                 </div>
//                 <div className="header item">
//                     <i className="user icon"></i>
//                     <Link to='/all-users'>All Users</Link>
//                 </div>
//             </div>

//             <div className="profile-card">
//                 <div class="column">
//                     <div class="ui two column centered grid">
//                         <div class="ui card">
//                             <img class="ui medium circular image" src={this.props.user.picture} alt=""></img>
//                             <div class="content">
//                                 <a class="header">{this.props.user.username}</a>
//                                 <div class="meta">
//                                     <span class="date">{this.props.user.email}</span>
//                                 </div>
//                                 <div class="description">
//                                     {this.props.user.name} enjoys {this.props.user.hobbies} and is a {this.props.user.occupation}.
//                                 </div>
//                             </div>
//                             <div class="extra content">
//                                 <a>
//                                     <i class="star icon"></i>
//                                     {/* {this.props.user.favorites.length} favorites */}
//                                 </a>
//                                 {/* <button className="edit-button" onClick={handleClick}>Edit Profile</button> */}
//                                 <button onClick={() => this.setState({isToggled: true})}>Edit Profile</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="sixteen wide column">
//                 <div className="favorites-container">
//                     {renderFavorites()}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// }

// export default ProfilePage;