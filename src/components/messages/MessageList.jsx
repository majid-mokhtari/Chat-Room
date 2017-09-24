import React, {Component} from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component{
  render(){
    const { messages, activeMessageId } = this.props;
    if(!messages.length){
      return null;
    }
    return (
      <ul>{
        messages.map( message =>{
          return <Message 
            message={message}
            activeMessageId={activeMessageId}
            key={message.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  setMessage: PropTypes.func.isRequired,
  activeMessageId: PropTypes.number.isRequired
}

export default MessageList