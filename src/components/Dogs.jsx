const Dogs = ({ breeds, fav, setFav }) => {

    const addFav = (dog) => {
        const newFav = fav.find(item => item == dog)
        if(!newFav) {
          setFav([...fav, dog]);
        }
      console.log(fav)
    }

    return(
        <div className="dogs__container">
        {breeds.length > 0 ?
          breeds.slice(0, 15).map(item => 
            <div key={item} className='uno'>
              <img src={item} onClick={() => addFav(item)} className="dogs__img"></img>
              <span className="dog__heart">{fav.find(e => e == item) ? '❤️' : '🤍'}</span>
            </div>
          )
          : <p>loading...</p>
        }
        </div>
    );
}

export default Dogs;