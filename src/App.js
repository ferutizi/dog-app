import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [formulario, setFormulario] = useState({name: ''})
  const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    if(breed != '') {
      fetchBreed(breed);
    } else {
      fetchData();  
    }
  }, [breed]);

  const fetchData = async () => {
    const res = await fetch('https://dog.ceo/api/breed/hound/images');
    const data = await res.json();
    setBreeds(data.message);
  }

  const fetchBreed = async (breed) => {
    const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await res.json();
    setBreeds(data.message);
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
    setBreed(formulario.name);
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
        {breeds.length > 0 ?
          breeds.slice(0, 15).map(item => 
              <img key={item} className="dogs__img" src={item}></img>
            )
          : <p>loading...</p>
        }
      </div>
    </div>
  );
}

export default App;
