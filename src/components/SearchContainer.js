import React from 'react'

export default function SearchContainer({filterListings}){
    return(
        <div className="search">
            <form id="home-search-bar">
                <input id="search-term" placeholder="Search by Address" type="text" onChange={filterListings}></input>
            </form> 
        </div>  
    )
}