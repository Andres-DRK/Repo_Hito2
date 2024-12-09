import React, { useEffect, useState} from 'react';
import Header from './components/Header';
import CardPizza from '../components/CardPizza';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';





function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);
  return (
    <div>
    <Header></Header>
    <Container className="justify-content-between">
      <Row className="p-4 pt-5 pb-5 ">
        {pizzas.map((pizza) => {
          return (
            <Col
              sm="12"
              md="6"
              lg="4"
              className="mt-4 d-flex justify-content-center"
            >
              <CardPizza key={pizza.id} pizza={pizza} />
            </Col>
          );
        })}
      </Row>
    </Container>
  </div>
  );
}

export default Home