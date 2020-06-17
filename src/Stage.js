import React from 'react'

function Stage(props) {
  return (
    <div id={props.id}>
      {props.name}
      <img src={props.avatar} alt ="avatar"/>
    </div>
  )
}

export default Stage