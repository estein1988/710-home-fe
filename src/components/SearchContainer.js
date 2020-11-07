import React from 'react'

export default function SearchContainer({filterListings}){
    return(
        <form className="ui-one-column-grid">
            <label>Search By Street: </label>
            <input type="text" onChange={filterListings}></input>
        </form>   
    )
}