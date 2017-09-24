import React, {Component} from 'react';
import User from './User.jsx';
import PropTypes from 'prop-types';

class UserList extends Component{
  render(){
    const { users, activeUserId } = this.props;
    if(!users.length){
      return null;
    }
    return (
      <ul>{
        users.map( user =>{
          return <User 
            user={user}
            activeUserId={activeUserId}
            key={user.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  activeUserId: PropTypes.number.isRequired
}

export default UserList