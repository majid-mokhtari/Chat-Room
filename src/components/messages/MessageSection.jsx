import React, { Component } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class MessageSection extends Component {
    
    addMessage(body){
      const { messages, users } = this.props.channelReducer;
      let createdAt = new Date();
      let author = users.length > 0 ? users[0].name : 'anonymous';
      this.props.actions.addMessage({id: messages.length+1, body, createdAt, author});
    }

    render() {
        const { messages, activeChannel } = this.props.channelReducer;
        const { name } = activeChannel;
        if(!name){
            return ( 
                <div className="default-message"> Select a channel</div>
            )
        }
        return (
            <div className='support panel panel-primary message-panel'>
                <div className='panel-heading'>
                    <strong>Messages</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList 
                        {...this.props} 
                        messages={messages}
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



