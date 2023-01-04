const Dogs = ({ breeds, fav, setFav }) => {

    const addFav = (dog) => {
        const newFav = fav.find(item => item == dog)
        if(!newFav) {
          setFav([...fav, dog]);
        }
    }

    return(
        <div className="dogs__container">
        {breeds.length > 0 ?
          breeds.slice(0, 15).map(item => 
              <img src={item} onClick={() => addFav(item)} key={item} className="dogs__img"></img>
            )
          : <p>loading...</p>
        }
        </div>
    );
}

export default Dogs;