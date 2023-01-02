import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({name: ''})
  const [breed, setBreed] = useState([]);

  useEffect(() => {
      fetchData();  
  }, []);

  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breed/hound/images');
    const data = await res.json();
    setBreed(data.message);
  }

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
    console.log(formulario);
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setBreed([
      ...breed,
      formulario.name
    ]);
    setFormulario({name: ''});
  }

  return (
    <div className="App">
      <h1>Dogs</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          value={formulario.name}
          onChange={handleChange}
          autoFocus
        />
        <button>Search</button>
      </form>
      <div className="dogs__container">
        {breed.length > 0 ?
          breed.slice(0, 15).map(item => 
              <img key={item} className="dogs__img" src={item}></img>
            )
          : <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;
