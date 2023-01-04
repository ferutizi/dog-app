import './Favs.css';

const Favs = ({ fav, setFav }) => {
    
    const deleteFav = (dog) => {
    const newFav = fav.filter(item => item != dog);
    setFav(newFav);
    }
      
    return(
        <>
            <h3>Favoritos ❤️</h3>
            <div className="dogs__container">
                {fav.length > 0 ?
                fav.map(item => 
                    <div key={item} className='fav__container'>
                        <img src={item} className="fav__img"></img>
                        <span onClick={() => deleteFav(item)} className="fav__heart">❤️</span>
                    </div>
                    )
                : <p style={{textAlign: 'center'}}>No agregaste ningún favorito aun.<br></br> Para hacerlo toca sobre el corazon 🤍 de la imagen que desees</p>
                }
            </div>
            {fav.length > 0 ?
                <button className="delete__button" onClick={() => setFav([])}>Quitar todos</button>
                : null 
            }
        </>
    );
}

export default Favs;