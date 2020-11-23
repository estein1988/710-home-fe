import React from 'react'
import 'semantic-ui-css/semantic.min.css'

export default function UserModal({user}) {    
    return (
        <div className="profile-card">
            <div className="column">
                <div className="ui two column centered grid">
                    <div className="ui card">
                        <img className="ui tiny centered circular image" src={user.picture} alt=""></img>
                        <div className="content">
                            <h4 className="header">{user.username}</h4>
                            <div className="meta">
                                <span className="date">{user.email}</span>
                            </div>
                            <div className="description">
                                {user.name} is {user.marital_status} and enjoys {user.hobbies}. They are a {user.occupation}. Describes themselves as having a {user.social_level} social life, with a budget of ${user.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}. Current lease end's {user.lease_end}.
                            </div>
                        </div>
                        <div className="extra content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
