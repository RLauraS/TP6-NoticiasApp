import React, { useState, useEffect } from 'react';
import { Container, Spinner, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Formulario from './components/Formulario';
import ListaNoticias from './components/ListaNoticias';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '9aBjX4eusz5nN.A';

const App = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState('general');
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    obtenerNoticias();
  }, [categoria]);

  const obtenerNoticias = async () => {
    try {
      const response = await axios.get(
        `https://api.newsdata.io/v1/news?api_key=9aBjX4eusz5nN.A&language=es&category=general
        `
      );
      setNoticias(response.data.results);
    } catch (error) {
      console.error('Error al obtener noticias:', error);
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <div className="my-5">
      <Spinner animation="border" variant="primary" />
    </div>
  ) : null;

  return (
    <div className="container">
      <h1 className="text-center my-4">Título de la Aplicación</h1>
      <Container className="text-center my-4">
        <Formulario setCategoria={setCategoria} />
      </Container>
      <Container>
        <ListaNoticias noticias={noticias} />
      </Container>
      <Container className="text-center my-5">
        {mostrarComponente}
        {noticias.length > 0 && (
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Img variant="top" src={noticias[0]?.urlToImage} />
            <Card.Body>
              <Card.Title>{noticias[0]?.title}</Card.Title>
              <Card.Text>{noticias[0]?.description}</Card.Text>
              <Button variant="primary" href={noticias[0]?.url} target="_blank">
                Ver Noticia Completa
              </Button>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default App;
