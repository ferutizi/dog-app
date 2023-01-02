import './App.css';
import { useEffect, useState } from "react";

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

  const addFav = (dog) => {
    const newFav = fav.find(item => item == dog)
    if(!newFav) {
      setFav([...fav, dog]);
    }
  }

  const deleteFav = (dog) => {
    const newFav = fav.filter(item => item != dog);
    setFav(newFav);
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
              <img src={item} onClick={() => addFav(item)} key={item} className="dogs__img"></img>
            )
          : <p>loading...</p>
        }
      </div>
      <h3>Favoritos</h3>
      <div className="dogs__container">
        {fav.length > 0 ?
          fav.map(item => 
              <img src={item} onClick={() => deleteFav(item)} key={item} className="dogs__img"></img>
            )
          : <p>No agregaste ningún favorito aun, haz click sobre la imagen que quieras agregar a favoritos</p>
        }
      </div>
    </div>
  );
}

export default App;
