import React from 'react'

export default function SearchContainer({filterUsers}){
    return(
        <div className="search">
            <form id="user-search-bar" className="ui-one-column-grid">
                <input id="search-term" placeholder="Search by Hobby" type="text" onChange={filterUsers}></input>
            </form>
        </div>   
    )
}