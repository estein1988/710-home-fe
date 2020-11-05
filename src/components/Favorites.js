import React from 'react'

export default function Favorites({favorite}) {    

    return (

        <div>
            <p>{favorite.home.street}</p>
            <button>x</button>
        </div>
    )
}