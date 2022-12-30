import { useEffect, useState } from "react";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchData();  
    console.log(dogs);
  }, [])
  

  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breed/hound/images');
    const data = await res.json();
    setDogs(data);
  }

  return (
    <>
      <h1>Dogs</h1>
    </>
  );
}

export default App;
