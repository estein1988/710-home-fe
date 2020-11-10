import React, {Component} from 'react'

class UserFavoritesTwoCard extends Component {

    render() {
        return (
            <div>
                <img class="ui tiny image centered" src={this.props.user.picture}></img>
                    <div class="middle aligned content">
                        <a class="header">{this.props.user.email}</a>
                    </div>
            </div>
        )
    }
}

export default UserFavoritesTwoCard;
