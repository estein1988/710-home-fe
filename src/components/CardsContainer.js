import React, { Component } from "react";
import HouseCard from './HouseCard'

class CardsContainer extends Component {

    render() {

        const renderHomes = () => this.props.allHomes.map(
            home => <HouseCard
                key={home.id}
                home={home}
                user={this.props.user}
                favorites={this.props.favorites}
                clickAction={this.props.clickAction}
                profileFetch={this.props.profileFetch}
                favoriteFetch={this.props.favoriteFetch}
                homeFetch={this.props.homeFetch}
            />
        )

        return (
                <div className="sixteen wide column">
                    <div className="cards-container">
                        {renderHomes()}
                    </div>
                </div>
        )
    }
}

export default CardsContainer;