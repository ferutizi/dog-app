const Formulario = ( {formulario, setFormulario, setBreed} ) => {

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

    return(
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
    );
}

export default Formulario;