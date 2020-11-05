import React from 'react'
// import DeleteLike from './DeleteLike'

export default function UserCard({user, favorites, deleteFavorite}) {    
    // const renderLikes = () => favorites.map(
    //     favorite => <DeleteLike
    //         key={favorite.id}
    //         favorite={favorite}
    //         deleteFavorite={deleteFavorite}
    //     />
    // )

    return (
    
    <div>
        <h4>{user.username} - {user.budget} - {user.lease_end}
        {/* {renderLikes()} */}
        </h4>
    </div>
    )
}

