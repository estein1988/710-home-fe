import React, {Component} from 'react'

class UserFavoritesCard extends Component {

    render() {
        return (
            <div>
                <img className="ui tiny image centered" src={this.props.user.picture}></img>
                    <div className="middle aligned content">
                        <a className="header">{this.props.user.email}</a>
                    </div>
            </div>
        )
    }
}

export default UserFavoritesCard;
