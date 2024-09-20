import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';



// Estilo del contenedor principal
const LoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-color: #e6e6e6; /* Color de fondo de la página */
`;

// Estilo del cuadro de Log In
const LoginBox = styled.div`
  background-color: #fff; /* Fondo blanco */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  width: 400px;
  max-width: 90%;
`;

// Título del formulario
const Title = styled.h2`
  color: #333; /* Color oscuro del título */
  text-align: left;
  margin-bottom: 30px;
  font-weight: 500; /* Peso de fuente mediano */
`;

// Agrupación de cada campo del formulario
const InputGroup = styled.div`
  margin-bottom: 20px;
`;

// Estilo de etiquetas de campos
const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333; /* Color oscuro del texto */
  font-size: 14px;
`;

// Estilo del campo de entrada
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 5px;
  font-size: 16px;
`;

// Botón de acción
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #333; /* Color de fondo negro */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #555; /* Cambio de color en hover */
  }
`;

// Texto con enlace
const TextLink = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #666; /* Color gris suave */
`;

const Link = styled.a`
  color: #333; /* Color oscuro para enlaces */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {

  const navigate = useNavigate();

  const handleAddParams = (children) => {
    if(children === ''){
      console.log("te regresa falso lol")
      return false 
    }
    if(children){
      navigate('/main', { replace: true });
    }


  };

  return (
    <LoginContainer>

        <div className="">
            <img src="https://via.placeholder.com/500x300"></img>
        </div>

      <LoginBox>
        <Title>Iniciar Sesión</Title>
        <form>
          <InputGroup>
            <Label htmlFor="username">Usuario</Label>
            <Input type="text" id="username" placeholder="Ingrese su usuario" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input type="password" id="password" placeholder="Ingrese su contraseña" />
          </InputGroup>
          <Button onClick={() => handleAddParams('chats')}>
            Iniciar Sesión
          </Button>
          <TextLink>
            ¿No tienes una cuenta? <Link href="register">Regístrate aquí</Link> {/* Enlace a Registro */}
          </TextLink>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
