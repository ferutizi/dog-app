import './App.css';
import { useEffect, useState } from "react";
import Dogs from './components/Dogs';
import Favs from './components/Favs';

function App() {
  const [formulario, setFormulario] = useState({name: ''})
  const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState([]);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    if(breed != '') {
      fetchBreed(breed);
    } else {
      fetchData();  
    }
  }, [breed]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breed/hound/images');
      const data = await res.json();
      setBreeds(data.message);
    } catch(error) {
      console.log(error);
    }
  }

  const fetchBreed = async (breed) => {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await res.json();
      setBreeds(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setBreed(formulario.name);
    setFormulario({name: ''});
  }

  return (
    <div className="App">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '4em'}}>
        <h1>Dog Breeds</h1>
        <form onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            value={formulario.name}
            onChange={handleChange}
            autoFocus
            className='input'
          />
          <button>Search</button>
        </form>
      </div>
      <Dogs breeds={breeds} fav={fav} setFav={setFav} />
      <Favs fav={fav} setFav={setFav} />
    </div>
  );
}

export default App;
