import React, { Component } from 'react'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import AllUsersContainer from './components/AllUsersContainer'
import MortgageRates from './components/MortgageRates'
import ProfilePage from './components/ProfilePage'
import SignUp from './components/SignUp'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';

const loginURL = 'http://localhost:8000/login/'
const profileURL = 'http://localhost:8000/profile/'
const homesURL = 'http://localhost:8000/homes/'
const usersURL = 'http://localhost:8000/users/'
const favoritesURL = 'http://localhost:8000/favorites'

class App extends Component {

  state = {
    user: [],
    allHomes: [],
    favorites: [],
    allUsers: [],
    filteredHomes: [],
    filteredUsers: []
  }

  fetchModels = () => {
    this.homeFetch()
    this.profileFetch()
    this.favoriteFetch()
    this.userFetch()
  }

  userFetch = () => {
    fetch(usersURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      this.setState({allUsers: result}) 
      this.setState({filteredUsers: result})
    })
  }

  homeFetch = () => {
    fetch(homesURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => {
      this.setState({allHomes: result})
      this.setState({filteredHomes: result})
    })
  }

  profileFetch = () => {
    fetch(profileURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => this.setState({user: result}))
  }

  favoriteFetch = () => {
    fetch(`${favoritesURL}/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(response => response.json())
    .then(result => this.setState({favorites: result}))
  }

  componentDidMount(){
    if(localStorage.token){
      this.fetchModels()
    }
  }

  // componentDidUpdate(){
  //   if(localStorage.token && this.state.allHomes.length === 0) {
  //     this.fetchModels()
  //   }
  // }

  addToFavorites = (home, user) => {
    const favoriteObject = {home: home.id, user: user.id}
    // const homeObject = {home}

    this.setState({
      favorites: [...this.state.favorites, favoriteObject],
      // allHomes: [...this.state.allHomes, home]
    })
      fetch(`${favoritesURL}/`, {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {home: home.id, user: user.id}
        )
      })
  }

  deleteFavorite = (favorite) => {
    const newFavorites = this.state.favorites.filter(newFavorite => newFavorite !== favorite)
    this.setState({favorites: newFavorites})
      fetch(`${favoritesURL}/${favorite.id}/`, {method: 'DELETE', 
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  }

  filterListings = (event) => {
    const input = event.target.value
    const filterListings = this.state.allHomes
    .filter(
      home => home.line.toLowerCase().includes(input.toLowerCase())
    )
    this.setState({filteredHomes: filterListings})
  }

  filterUsers = (event) => {
    const input = event.target.value
    const filterUsers = this.state.allUsers
    .filter(
      user => user.hobbies.toLowerCase().includes(input.toLowerCase())
    )
    this.setState({filteredUsers: filterUsers})
  }

  // updateProfile = (updatedProfile) => {
  //   let updateUser = this.state.allUsers.map(user => user.id === updatedProfile.id ? updatedProfile : user)
  //   this.setState({updateUser})
  // }

  login = (user) => {
    return fetch(loginURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(result => {localStorage.setItem('token', result.access)
      this.setState({user: result})
    })
  }

  logout = () => {
    localStorage.setItem('token', '');
    localStorage.clear();
    this.setState({ redirect: true });
  }

  render(){
    return (
      <div className="App">
      <Switch>

        <PrivateRoute 
          exact path='/' 
          user={this.state.user}
          allUsers={this.state.allUsers}
          allHomes={this.state.filteredHomes}
          filteredHomes={this.state.filteredHomes}
          favorites={this.state.favorites}
          clickAction={this.addToFavorites}
          profileFetch={this.profileFetch}
          favoriteFetch={this.favoriteFetch}
          homeFetch={this.homeFetch}
          filterListings={this.filterListings}
          logout={this.logout}
        />

        <Route path='/rates'>
          <MortgageRates 
            logout={this.logout}
          />
        </Route>

        <Route path='/user-profile'>
          <ProfilePage 
            user={this.state.user}
            allUsers={this.state.allUsers}
            allHomes={this.state.allHomes} 
            favorites={this.state.favorites}
            profileFetch={this.profileFetch}
            favoriteFetch={this.favoriteFetch}
            homeFetch={this.homeFetch}
            deleteFavorite={this.deleteFavorite}
            updateProfile={this.updateProfile}
          />
        </Route>

        <Route path='/all-users'>
          <AllUsersContainer
            allUsers={this.state.filteredUsers}
            filterUsers={this.filterUsers}
          />
        </Route>

        <Route path='/register'>
          <SignUp
          />
        </Route>

        <Route 
          path='/login' 
          render={(props) => <Login {...props} login={this.login} />} />
        <Route render={() => <Redirect to="/" /> } />
        
      </Switch>
      </div>
    );
  }
}

export default App;
