import React from 'react'

export default function SearchContainer({filterUsers}){
    return(
        <form className="ui-one-column-grid">
            <label>Search By Hobby: </label>
            <input type="text" onChange={filterUsers}></input>
        </form>   
    )
}