import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [surname, setName] = useState("Emre");
  const [age, setAge] = useState(29);
  const [friends, setFriends] = useState(["Oscar", "Adam"]);
  const [address, setAddress] = useState({title: "Istanbul", zip: 342345});


  return (
    <div className="App">
      <h1>Merhaba {surname}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Victor")}>Change Name!</button>
      <button onClick={() => setAge("25")}>Change Age!</button>

      <hr />
      <br></br>

      {
        friends.map((friend, index) => (
          <div key = {index}> {friend} </div>
        ))
      }

      <br />

      <h2>Friends</h2>
      <button onClick={() => setFriends([...friends, "Eva"])}>
        add new friend
      </button>
      
      <hr />
      <br></br>
      
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br />

      <button onClick={() => setAddress({...address, title: "Ankara", zip: 2342135})}>
        Change Address!
      </button>

    </div> 



  );
}

export default App;
