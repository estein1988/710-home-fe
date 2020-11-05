import React from 'react'
// import DeleteLike from './DeleteLike'

export default function UserModal({user}) {    

    return (
    
    <div>
        <h4>
            {user.username}
        </h4>
        <p>
            {user.email}
        <p>
            {user.phone_number}
        </p>
        <p>
            {user.hobbies}
        </p>
            {user.social_level} social level
        </p>
        <br></br>
    </div>
    )
}