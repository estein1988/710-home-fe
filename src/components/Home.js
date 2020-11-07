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

                <div className="ui inverted blue secondary pointing menu">
                    <div className="header item">
                        {this.props.user.username} 
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
                        <Link to='/all-users'>All Useres</Link>
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