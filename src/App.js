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
    <>
      <h1>Dogs</h1>
      {dogs.length > 0 ?
        dogs.slice(0, 15).map(item => 
          <img key={item} src={item}></img>
          )
        : <p>loading...</p>
      }
    </>
  );
}

export default App;
