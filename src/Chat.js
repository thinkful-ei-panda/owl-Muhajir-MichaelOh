import React from 'react';
import moment from 'moment';

function Chat(props) {
  console.log(props)
  let messageType = {
    'message' : props.message,
    'thumbs-up' : props.name + ' gave a thumbs up',
    'thumbs-down' : props.name + ' gave a thumbs down',
    'raise-hand' : props.name + ' raised their hand',
    'clap' : props.name + ' clapped',
    'join' : props.name + ' joined',
    'leave' : props.name + ' left',
    'join-stage' : props.name + ' joined the stage',
    'leave-stage' : props.name + ' left the stage'
  };
  let type = props.type;
  
  return (
    
  <li>
    <span>{props.name}</span>
    <span>{moment(props.time).format('h:mm')}</span>
    <img src={props.avatar} alt ="avatar"/>
    <span>{messageType[type]}</span>
    <span>{props.msgText ? props.msgText : ''}</span>
  </li>
)
}

Chat.defaultProps = {
  name: 'John Smith',
  avatar: 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'
}

export default Chat