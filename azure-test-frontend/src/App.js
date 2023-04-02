import {useState} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [name, setName] = useState("");
  const showName = () =>{
    axios.get("https://localhost:7108/api/GetName")
    .then((r)=>{
      // console.log(r);
      setName(r.data)
    })
    .catch((e) => {
      console.log(e);
    });
  }
  return (
    <div className="App">
      <button onClick={()=>showName()}>Get Name</button>
      <p>{name}</p>
    </div>
  );
}

export default App;
