import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/channelAction';
import ChannelSection from './../components/channels/ChennelSection.jsx';
import UserSection from './../components/users/UserSection.jsx';
import MessageSection from './../components/messages/MessageSection.jsx';
import Socket from './../util/socket'

class AppContainer extends Component {

    componentWillMount(){
      this.props.actions.loadChannels();
      this.props.actions.loadUsers();
      this.props.actions.loadMessages();
    }

    componentDidMount(){
      let socket = this.socket = new Socket();
      socket.on('channel add', (channel) => this.props.actions.addChannel(channel));
      socket.on('user add', (user) => this.props.actions.addUser(user));
    }
    
    render() {
        //const { channels, activeChannelId } = this.props.channelReducer;
        return (
          <div className="app">
            <div className="nav" >
              <ChannelSection 
                {...this.props} 
                addChannel={(request) => this.socket.emit('channel add', request)}
                setChannel={(activeChannel) => this.props.actions.setChannel(activeChannel)}
              />
              <UserSection 
                {...this.props} 
                addUser={(request => this.socket.emit('user add', request))}
              />
            </div>
            <MessageSection {...this.props} />
          </div>
        );
    }
}


function mapStateToProps({channelReducer} ) {
  return {channelReducer};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);