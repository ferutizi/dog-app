import './Dogs.css';

const Dogs = ({ breeds, fav, setFav }) => {

    const addFav = (dog) => {
        const newFav = fav.find(item => item == dog)
        if(!newFav) {
          setFav([...fav, dog]);
        } else {
          setFav(fav.filter(item => item !== dog))
        }
      console.log(fav)
    }

    return(
        <div className="dogs__container">
        {breeds.length > 0 ?
          breeds.slice(0, 15).map(item => 
            <div key={item} className='img__container'>
              <img src={item} className="dogs__img"></img>
              <span onClick={() => addFav(item)} className="dog__heart">{fav.find(e => e == item) ? '❤️' : '🤍'}</span>
            </div>
          )
          : <p>Loading...</p>
        }
        </div>
    );
}

export default Dogs;