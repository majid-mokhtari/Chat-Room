import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component{
  onClick(e){
    e.preventDefault();
    const {setMessage, message} = this.props;
    setMessage(message);
  }
  render(){
    const {message, activeMessage} = this.props;
    const active = message === activeMessage ? 'active' : '';
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {message.message}
        </a>
      </li>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  setMessage: PropTypes.func.isRequired,
  activeMessageId: PropTypes.number.isRequired
}

export default Message