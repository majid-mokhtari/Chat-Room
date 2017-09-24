import React, { Component } from 'react';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';


class ChannelSection extends Component {

    addChannel(name){
      const { channels } = this.props.channelReducer;
      this.props.actions.addChannel({id: channels.length+1, name});
    }

    render() {
        const { channels, activeChannel } = this.props.channelReducer;
        return (
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Channels</strong>
                </div>
                <div className='panel-body channels'>
                    <ChannelList 
                        {...this.props} 
                        channels={channels}
                        activeChannel={activeChannel}
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



