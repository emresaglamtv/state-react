import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [surname, setName] = useState("Emre");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Oscar", "Adam"]);


  return (
    <div className="App">
      <h1>Merhaba {surname}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Victor")}>Change Name!</button>
      <button onClick={() => setAge("25")}>Change Age!</button>

      <hr />
      {
        friends.map((friend, index) => (
          <div key = {index}> {friend} </div>
        ))
      }

      <br />

      <button onClick={() => setFriends([...friends, "Eva"])}>
        add new friend
      </button>

    </div> 



  );
}

export default App;
