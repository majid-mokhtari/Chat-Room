import React, { Component } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';


class UserSection extends Component {

    addUser(name){
      const { users } = this.props.channelReducer;
      this.props.actions.addUser({id: users.length+1, name});
    }

    render() {
        const { users } = this.props.channelReducer;
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body users'>
                    <UserList 
                        {...this.props} 
                        users={users}
                    />
                    <UserForm 
                        addUser={this.addUser.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default UserSection;



