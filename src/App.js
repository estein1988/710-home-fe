import React, { Component } from 'react'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import AllUsersContainer from './components/AllUsersContainer'
import MortgageRates from './components/MortgageRates'
import ProfilePage from './components/ProfilePage'
import Register from './components/Register'
import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';

const loginURL = 'https://home-split-7-10.herokuapp.com/login/'
const profileURL = 'https://home-split-7-10.herokuapp.com/profile/'
const homesURL = 'https://home-split-7-10.herokuapp.com/homes/'
const usersURL = 'https://home-split-7-10.herokuapp.com/users/'
const favoritesURL = 'https://home-split-7-10.herokuapp.com/favorites'
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true

class App extends Component {

  state = {
    user: {},
    allHomes: [],
    favorites: [],
    allUsers: [],
    filteredHomes: [],
    filteredUsers: [],
    redirect: false
  }

  fetchModels = () => {
    this.homeFetch()
    this.profileFetch()
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
    .then(result => {
      this.setState({user: result})
      this.setState({favorites: result.favorites})
    })
  }

  componentDidMount(){
    if(localStorage.token){
      this.fetchModels()
    }
  }

  addToFavorites = (home, user) => {
    const favoriteObject = {home: home.id, user: user.id}
    const homeObject = {...home, users: [...home.users, user]}

    const allHomes = this.state.filteredHomes.map(savedHome => {
      return savedHome.id !== home.id
        ? savedHome
        : homeObject
    })

    this.setState({
      favorites: [...this.state.favorites, favoriteObject],
      filteredHomes: allHomes
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

  updateProfile = (profile, budget, currentRent, income, occupation, lease_end, marital_status) => {
    const newProfile = this.state.allUsers.filter(newProfile => newProfile !== profile)
    this.setState({user: newProfile})
    this.setState({allUsers: newProfile})
      fetch(`https://home-split-7-10.herokuapp.com/users/${this.state.user.id}/`, {
          method: "PATCH",
          headers: {
            'Authorization': `Bearer ${localStorage.token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            budget: budget, 
            current_rent: currentRent, 
            income: income, 
            occupation: occupation, 
            lease_end: lease_end, 
            marital_status: marital_status
          })
        })
        .then(response => response.json())
        .then(result => 
          (Object.keys(result).length > 10)
          ? alert('Profile update successfully')
          : alert(Object.keys(result).map(error => {
              const fullMessage = error.replace(/_/g, ' ') + ' may not be blank.\n'
              const stringMessage = fullMessage[0].toUpperCase() + fullMessage.slice(1)
              return stringMessage
            }))
        )
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


  login = (user) => {
    return fetch(loginURL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( user )
    })
    .then(response => response.json())
    .then(result => {
      (result.detail === 'No active account found with the given credentials')
      ? window.location.reload()
      : localStorage.setItem('token', result.access)
    })
    .then(() => this.fetchModels())
  }

  logout = () => {
    localStorage.setItem('token', '');
    localStorage.clear();
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
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
            homeFetch={this.homeFetch}
            filterListings={this.filterListings}
            logout={this.logout}
          />

          <Route path='/rates'>
            <MortgageRates 
              user={this.state.user}
              logout={this.logout}
            />
          </Route>

          <Route path='/user-profile'>
            <ProfilePage 
              allUsers={this.state.allUsers}
              user={this.state.user}
              favorites={this.state.favorites}
              allHomes={this.state.allHomes} 
              fetchModels={this.fetchModels}
              deleteFavorite={this.deleteFavorite}
              updateProfile={this.updateProfile}
              logout={this.logout}
            />
          </Route>

          <Route path='/all-users'>
            <AllUsersContainer
              allUsers={this.state.filteredUsers}
              user={this.state.user}
              filterUsers={this.filterUsers}
              logout={this.logout}
            />
          </Route>

          <Route path='/register'>
            <Register 
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
