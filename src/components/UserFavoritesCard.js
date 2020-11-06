import React from 'react'

export default function UserCard({user}) {    
    
    return (
        <div>
            <h4>
                {user.username} - {user.budget} - {user.lease_end}
            </h4>
        </div>
    )
}
