import React, {Component} from 'react'

// const profileURL = 'http://localhost:8000/profile/'
// const favoritesURL = 'http://localhost:8000/favorites'

class UserFavoritesTwoCard extends Component {

    componentDidMount(){
        this.props.homeFetch()
        this.props.profileFetch()
        this.props.favoriteFetch()
    }

    // componentDidUpdate({favorites}) {
    //     if (this.props.favorites !== favorites && this.props.favorites.length === 0) {
    //         this.props.homeFetch()
    //         this.props.profileFetch()
    //         this.props.favoriteFetch()
    //     }
    // }

    render() {

        return (
            <div className="user-info">
                <h4>
                    {this.props.user.username} - {this.props.user.email}
                </h4>
            </div>
        )
    }
}

export default UserFavoritesTwoCard;
