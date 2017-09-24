import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component{

  onClick(e){
    e.preventDefault();
    const {setUser, user} = this.props;
    setUser(user);
  }
  
  render(){
    const {user, activeUser} = this.props;
    const active = user === activeUser ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {user.name}
        </a>
      </li>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
  activeUserId: PropTypes.number.isRequired
}

export default User