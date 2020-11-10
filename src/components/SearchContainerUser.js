import React from 'react'

export default function SearchContainer({filterUsers}){
    return(
        <form id="user-search-bar" className="ui-one-column-grid">
            <label>Search User By Hobby: </label>
            <input type="text" onChange={filterUsers}></input>
        </form>   
    )
}