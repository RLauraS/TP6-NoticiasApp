
const Noticia = ({ noticia }) => {
  const { title, description, url, urlToImage } = noticia;

  return (
    <div className="noticia">
      <h2>{title}</h2>
      {urlToImage && <img src={urlToImage} alt={title} />}
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Leer más
      </a>
    </div>
  );
};

export default Noticia;
