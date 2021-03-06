import React, { Component } from 'react'
import GoogleMap from './GoogleMap'
import SearchContainer from './SearchContainer'
import CardsContainer from './CardsContainer'
import {Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

export default class Home extends Component {
    
    render(){
        return(
            <div>
                <div className="ui large inverted blue secondary pointing menu">
                    <div id="avatar-image">
                        <img className="ui mini circular image" src={this.props.user.picture} alt=""></img>
                    </div>
                    <div className="header item">
                        {this.props.user.username} 
                    </div>
                    <div className="header item">
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
                        <i onClick={this.props.logout} className="sign out icon"></i>
                        <p>Logout</p>
                    </div>
                </div>
                
                <div className='homeSearchBar'>
                    <SearchContainer 
                        filterListings={this.props.filterListings}
                    />
                </div>

                <div className="googleMap">
                    <GoogleMap 
                        allHomes={this.props.allHomes}
                        user={this.props.user}
                    />
                </div>

                <CardsContainer 
                    allHomes={this.props.allHomes} 
                    user={this.props.user}
                    home={this.props.home}
                    favorites={this.props.favorites}
                    clickAction={this.props.clickAction}
                    profileFetch={this.props.profileFetch}
                    favoriteFetch={this.props.favoriteFetch}
                    homeFetch={this.props.homeFetch}
                />

            </div>
        )
    }
}