
import Noticia from './noticia';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="lista-noticias">
      {noticias.map((noticia) => (
        <Noticia key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

export default ListaNoticias;
