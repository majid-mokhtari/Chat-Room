import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

class Message extends Component{
  render(){
    const {message} = this.props;
    const createdAt = moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    return (
      <li className="message">
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">
          {message.body}
        </div>
      </li>
    )
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired
}

export default Message