// import React, {Component} from 'react'

// const profileURL = 'http://localhost:8000/profile/'
// const favoritesURL = 'http://localhost:8000/favorites'

// class UserFavoritesTwoCard extends Component {

//     state = {
//         user: [],
//         favorites: []
//     }

//     componentDidUpdate({favorites}) {
//         if (this.props.favorites !== favorites  && localStorage.token && this.state.user.length === 0) {
//             this.fetchData(this.props.favorites);
//         }
//     }

//     fetchData = () => {
//         fetch(profileURL, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${localStorage.token}`
//             }
//         })
//         .then(response => response.json())
//         .then(result => this.setState({user: result}))
    
//     fetch(`${favoritesURL}/`, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${localStorage.token}`
//         }
//         })
//         .then(response => response.json())
//         .then(result => this.setState({favorites: result}))
//     }

//     render() {

//         return (
//             <div className="user-info">
//                 <h4>
//                     {this.props.user.username} - {this.props.user.email}
//                 </h4>
//             </div>
//         )
//     }
// }

// export default UserFavoritesTwoCard;
