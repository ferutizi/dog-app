const Favs = ({ fav, setFav }) => {
    
    const deleteFav = (dog) => {
    const newFav = fav.filter(item => item != dog);
    setFav(newFav);
    }
      
    return(
        <>
            <h3>Favoritos</h3>
            <div className="dogs__container">
                {fav.length > 0 ?
                fav.map(item => 
                    <img src={item} onClick={() => deleteFav(item)} key={item} className="fav__img"></img>
                    )
                : <p>No agregaste ningún favorito aun</p>
                }
            </div>
      </>
    );
}

export default Favs;