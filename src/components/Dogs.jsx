import './Dogs.css';

const Dogs = ({ breeds, fav, setFav, breed }) => {

    const addFav = (dog) => {
        const newFav = fav.find(item => item == dog)
        if(!newFav) {
          setFav([...fav, dog]);
        } else {
          setFav(fav.filter(item => item !== dog))
        }
    }

    return (
      <div className="dogs__container">
          {Array.isArray(breeds) && breeds.length > 0 ? (
              breeds.slice(0, 15).map(item => 
                  <div key={item} className='img__container'>
                      <img src={item} className="dogs__img" alt={breed} title={breed}></img>
                      <span onClick={() => addFav(item)} className="dog__heart">{fav.find(e => e === item) ? '❤️' : '🤍'}</span>
                  </div>
              )
          ) : (
              <p>No dogs found</p>
          )}
      </div>
  );
}

export default Dogs;