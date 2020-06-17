import React from 'react';
import store from './store';
import InSession from './InSession';
import NotInSession from './NotInSession';
import Stage from './Stage';
import Chat from './Chat';


function App() {
  return (
    <main className='App'>
      <div className="Participant-List">
       <ul>
       {
         store.inSession.map(participant => {
           return <InSession key={participant.id} {...participant}/>
         })
       }
       </ul>
       <ul>
       {
         store.notInSession.map(participant => {
           return <NotInSession key={participant.id} {...participant}/>
         })
       }
       </ul>
      </div>
      <div className="chat">
        <ul>
        {store.chatEvents.map(chat => {
          const participant = store.participants.find(item => item.id === chat.participantId)
          
          
          let message = {
            name : participant.name,
            avatar : participant.avatar,
            type : chat.type,
            msgText : chat.message,
            time : chat.timestamp
          } 
            return <Chat key={chat.participantId} {...message} />
          
        })}
        </ul>
      </div>
      <div className = "stage">
        <h1>Stage</h1>
        {store.onStage.map(participant => {
          return <Stage key={participant.id} {...participant}/>
        })}
      </div>
    </main>
  );
}

export default App;