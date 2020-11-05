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
                deleteFavorite={this.props.deleteFavorite}
            />
        )

        return (
            <div className="cards-container">
                {renderHomes()}
            </div>
        )
    }
}

export default CardsContainer;