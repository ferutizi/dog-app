import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchData();  
  }, [])
  

  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breed/hound/images');
    const data = await res.json();
    setDogs(data.message);
  }

  fetchData();

  return (
    <div className="App">
      <h1>Dogs</h1>
      <div className="dogs__container">
        {dogs.length > 0 ?
          dogs.slice(0, 15).map(item => 
              <img className="dogs__img" src={item}></img>
            )
          : <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;
