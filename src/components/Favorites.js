import React, {Component} from 'react'

class Favorites extends Component {

    componentDidMount() {
        this.props.profileFetch()
    }

    render(){
        return (
            <div>
                <p>{this.props.favorite.home.street}</p>
                <button onClick={ ()=> this.props.deleteFavorite(this.props.favorite)}>x</button>
            </div>
            )
    }
}

export default Favorites
