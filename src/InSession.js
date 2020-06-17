import React from 'react';

function InSession(props) {
return (
  <li>
    <span>{props.name}</span>
    <img src={props.avatar} alt='avatar'/>
    <span>{props.inSession}</span>
  </li>
)
}

export default InSession