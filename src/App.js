import './App.css';
import { useEffect, useState } from "react";
import Dogs from './components/Dogs';
import Favs from './components/Favs';
import Formulario from './components/Formulario';

function App() {
  const [formulario, setFormulario] = useState({name: ''})
  const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState([]);
  const [fav, setFav] = useState([]);

  //🤍❤️

  useEffect(() => {
    if(breed === '') {
      fetchData();  
    } else {
      fetchBreed(breed);
    }
  }, [breed]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breed/hound/images');
      const data = await res.json();
      if(data.message === '') {
        return alert('La raza de perro ingresada no se pudo encontrar')
      }
      setBreeds(data.message);
    } catch(error) {
      console.log(error);
    }
  }

  const fetchBreed = async (breed) => {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await res.json();
      if(data.message === '') {
        return alert('La raza de perro ingresada no se pudo encontrar')
      }
      setBreeds(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <div className='title__container'>
        <h1 onClick={() => fetchData()} style={{cursor: 'pointer'}}>Dog Breeds</h1>
        <Formulario formulario={formulario} setFormulario={setFormulario} setBreed={setBreed} />
      </div>
      <Dogs breeds={breeds} fav={fav} setFav={setFav} breed={breed} />
      <Favs fav={fav} setFav={setFav} />
    </div>
  );
}

export default App;
