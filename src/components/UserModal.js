import React from 'react'

export default function UserModal({user}) {    

    return (
    
    <div>
        <h4>{user.username}</h4>
        <p>{user.email}</p>
        <p>{user.phone_number}</p>
        <p>{user.hobbies}</p>
        <p>{user.social_level} social level</p>
        <br></br>
    </div>
    )
}