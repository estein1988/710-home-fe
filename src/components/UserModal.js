import React from 'react'
import 'semantic-ui-css/semantic.min.css'

export default function UserModal({user}) {    
    return (
        <div className="profile-card">
            <div class="column">
                <div class="ui two column centered grid">
                    <div class="ui card">
                        <img class="ui tiny centered circular image" src={user.picture} alt=""></img>
                        <div class="content">
                            <h4 class="header">{user.username}</h4>
                            <div class="meta">
                                <span class="date">{user.email}</span>
                            </div>
                            <div class="description">
                                {user.name} is {user.marital_status} and enjoys {user.hobbies}. They are a {user.occupation}. Describes themselves as having a {user.social_level} life, with a monthly budget of {user.budget} per month. Current lease end's {user.lease_end}.
                            </div>
                        </div>
                        <div class="extra content">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
