import React from 'react';
import store from './store'
// render list of all participants
// show current participants above former participants
// each participant should show name, avatar, and if they are currently in session

function Participants(props) {
    return (
        <li>
            <span>{props.name}</span>
            <span>{props.avatar}</span>
            <span>{props.inSession}</span>

        </li>
    )
}

export default Participants
