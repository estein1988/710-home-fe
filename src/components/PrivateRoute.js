import React from 'react'
import Home from './Home'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute(props){
    const {user, allHomes, favorites, clickAction, profileFetch, favoriteFetch, homeFetch} = props

    return <Route {...props} render={(routerProps) => {
        return localStorage.token 
            ?   <Home 
                    {...routerProps} 
                    user={user}
                    allHomes={allHomes} 
                    favorites={favorites} 
                    clickAction={clickAction}
                    profileFetch={profileFetch}
                    favoriteFetch={favoriteFetch}
                    homeFetch={homeFetch}
                />
            :   <Redirect to="/login" />
    }} />
}