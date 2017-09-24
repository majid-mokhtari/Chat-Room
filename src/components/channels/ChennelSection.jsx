import React, { Component } from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';


class ChannelSection extends Component {

    addChannel(name){
      const { channels } = this.props.channelReducer;
      this.props.actions.addChannel({id: channels.length+1, name});
    }

    setChannel(activeChannel){
      this.setState({activeChannel});
      // TODO: Get Channels Messages
    }

    render() {
        const { channels, activeChannelId } = this.props.channelReducer;
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList 
                        {...this.props} 
                        channels={channels}
                        setChannel={this.setChannel}
                        activeChannelId={activeChannelId}
                    />
                    <ChannelForm 
                        addChannel={this.addChannel.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default ChannelSection;



