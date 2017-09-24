import React, {Component} from 'react';
import Channel from './Channel.jsx';
import PropTypes from 'prop-types';

class ChannelList extends Component{
  render(){
    const { channels, activeChannelId } = this.props;
    if(!channels.length){
      return null;
    }
    return (
      <ul>{
        channels.map( chan =>{
          return <Channel 
            channel={chan}
            activeChannelId={activeChannelId}
            key={chan.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
  activeChannelId: PropTypes.number.isRequired
}

export default ChannelList