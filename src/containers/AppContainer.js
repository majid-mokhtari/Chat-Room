import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/channelAction';
import ChannelSection from './../components/channels/ChennelSection.jsx';
import UserSection from './../components/users/UserSection.jsx';
import MessageSection from './../components/messages/MessageSection.jsx';

class AppContainer extends Component {

    componentWillMount(){
      this.props.actions.loadChannels();
      this.props.actions.loadUsers();
      this.props.actions.loadMessages();
    }

    componentDidMount(){
      this.ws = new WebSocket('ws://echo.websocket.org');
      this.ws.onmessage = (e) => {
          const data = JSON.parse(e.data);
          if(data){
              this.props.actions.addChannel(data)
          }
      }
      this.ws.onopen = (e) => console.log("Connected")
      this.ws.onclose = (e) => console.log("Disconnected")
    }

    addChannel(request){
      this.ws.send(JSON.stringify(request))
    }

    setChannel(activeChannel){
      this.props.actions.setChannel(activeChannel);
    }
    
    render() {
        //const { channels, activeChannelId } = this.props.channelReducer;
        return (
          <div className="app">
            <div className="nav" >
              <ChannelSection 
                {...this.props} 
                addChannel={this.addChannel.bind(this)}
                setChannel={this.setChannel.bind(this)}
              />
              <UserSection {...this.props} />
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