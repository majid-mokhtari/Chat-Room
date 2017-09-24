import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class MessageSection extends Component {

    addMessage(message){
      const { messages } = this.props.channelReducer;
      this.props.actions.addMessage({id: messages.length+1, message});
    }

    setMessage(activeMessage){
      this.setState({activeMessage});
      // TODO: Get Channels Messages
    }

    render() {
        const { messages, activeMessageId } = this.props.channelReducer;
        return (
            <div className='support panel panel-primary message-panel'>
                <div className='panel-heading'>
                    <strong>Messages</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList 
                        {...this.props} 
                        messages={messages}
                        setMessage={this.setMessage}
                        activeMessageId={activeMessageId}
                    />
                    <MessageForm 
                        addMessage={this.addMessage.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default MessageSection;



