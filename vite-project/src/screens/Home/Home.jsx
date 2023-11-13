import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'; 
import Form from 'react-bootstrap/Form'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ handleInput, handleRegister }) => {
  return (
    <div className="container d-flex  justify-content-center align-items-center  vh-200">
      <div className="card p-4">
        <h2 className="text-center mb-4">Registro</h2>
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres</Form.Label>
            <Form.Control
              input
              name="Nombres"
              type="Nombres"
              placeholder="Enter nombres"
              onChange={(e) => handleInput(e)}
              />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Identificacion</Form.Label>
            <Form.Control
              input
              name="Identificacion"
              type="text"
              placeholder="Enter Identificacion"
              onChange={(e) => handleInput(e)}
              />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              input
              name="Fecha de nacimiento"
              type="date"
              placeholder="Fecha de nacimiento"
              onChange={(e) => handleInput(e)}
              />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              input
              name="Telefono"
              type="text"
              placeholder="Enter Telefono"
              onChange={(e) => handleInput(e)}
              />
               </Form.Group>
                          
               
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>email</Form.Label>
            <Form.Control
              input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => handleInput(e)}
            />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              input
              name="Contraseña"
              type="password"
              placeholder="Password"
              onChange={(e) => handleInput(e)}
            />
          </Form.Group> 
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>rol</Form.Label>
            <Form.Control
              input
              name="rol"
              type="rol"
              placeholder="Enter rol"
              onChange={(e) => handleInput(e)}
              />
               </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recordar datos" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;