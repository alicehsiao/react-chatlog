import React from 'react';
import './ChatEntry.css';
import ChatBubble from './ChatBubble';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    <div className={"chat-entry " + (props.name === props.senderOne ? "local":"remote")}>
      <p className="entry-name">{props.name}</p>
      <ChatBubble messageBody={props.message} timeStamp={props.timeStamp}/>
    </div>
  );
};

ChatEntry.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatEntry;
