import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLogComponents = props.messages.map((entry, i) => {
    return <ChatEntry key={i}
    name={entry.sender}
    message={entry.body}
    timeStamp={entry.timeStamp}/>
  });

  return (
    <div className="chat-log">
      {chatLogComponents}
     </div>
  );
};

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatLog;
