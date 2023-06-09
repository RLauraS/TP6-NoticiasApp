

const Formulario = ({ setCategoria }) => {
  const cambiarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  return (
    <form>
      <label htmlFor="categoria">Selecciona una categoría:</label>
      <select name="categoria" onChange={cambiarCategoria}>
        <option value="general">General</option>
        <option value="negocios">Negocios</option>
        <option value="tecnologia">Tecnología</option>
        <option value="deportes">Deportes</option>
        <option value="entretenimiento">Entretenimiento</option>
        <option value="salud">Salud</option>
        <option value="ciencia">Ciencia</option>
      </select>
    </form>
  );
};

export default Formulario;
