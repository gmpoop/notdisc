import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import User from "../server/Entities/User";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Service from '../server/Service';
import UserRoutes from '../server/Routes/UserRoutes';

const _routes = new UserRoutes();
const MySwal = withReactContent(Swal);

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

  const [user, setUser] = React.useState([]);

  const navigate = useNavigate();

  const log = async () => {

    const user = new User();
    user.setEmail(document.getElementById("Email").value);
    user.setPassword(document.getElementById("Password").value);

    setUser(user);

    const route = _routes.Replace(_routes.Get(), ["@email", "@id"], [user.Email, ""]);
    
    const _service = new Service(
      route,
      "application/json",
      "GET",
      {}, 
    );

    _service.response().then((data) => {
      console.log(data);
        if(!data){
          MySwal.fire({
            title: 'Error!',
            text: 'Usuario no encontrado',
            icon: 'error',
          });
          return;
        }

        if(data.password !== user.Password){
          MySwal.fire({
            title: 'Error!',
            text: 'Contraseña incorrecta',
            icon: 'error',
          });
          return;
        }
        
        MySwal.fire({
          title: 'Éxito!',
          text: 'Bienvenido',
          icon: 'success',
        });
        navigate('/main') ;
        sessionStorage.setItem("user", JSON.stringify(data));

    });
  
};

  return (
    <LoginContainer>
      <div className="">
        <img src="https://via.placeholder.com/500x300" alt=""></img>
      </div>
      <LoginBox>
        <Title>Iniciar Sesión</Title>
        <InputGroup>
          <Label htmlFor="Email">Correo electronico</Label>
          <Input type="text" id="Email" placeholder="Ingrese su correo electronico" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="Password">Contraseña</Label>
          <Input type="Password" id="Password" placeholder="Ingrese su contraseña" />
        </InputGroup>
        <Button onClick={log}>
          Iniciar Sesión
        </Button>
        <TextLink>
          ¿No tienes una cuenta? <Link href="register">Regístrate aquí</Link> {/* Enlace a Registro */}
        </TextLink>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
