import React from 'react';
import store from './store'
import Participants from './Participants'

function App() {
  return (
    <main className='App'>
      <ul>
      {/* {for (let i =0; i < store.participants.length; i++) {
         return <Participants {...store.participants[i]}/>
       }
       }  */
       }
       {
         store.participants.map(participant => {
           return <Participants key={participant.id} {...participant}/>
         })
       }
       
      
      </ul>
    </main>
  );
}

export default App;