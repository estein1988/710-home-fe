import React, { Component } from 'react'
import GoogleMap from './GoogleMap'
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
                        <i className="home icon"></i>
                        <Link to='/rates'>Mortgage Rates</Link>
                    </div>
                    <div className="header item">
                        <i className="home icon"></i>
                        <Link to='/profile'>My Profile</Link>
                    </div>
                </div>
                
                <div className="googleMap">
                    <GoogleMap 
                        allHomes={this.props.allHomes} 
                    />
                </div>

                <CardsContainer 
                    allHomes={this.props.allHomes} 
                    user={this.props.user} 
                    favorites={this.props.favorites}
                    clickAction={this.props.clickAction}
                    deleteFavorite={this.props.deleteFavorite}
                />

            </div>
        )
    }
}