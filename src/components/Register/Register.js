import React from "react";
import styled from "styled-components";
import {Container, Box, Title, InputGroup, 
        Label, Input, Button, TextLink, Link} 
        from "../Elements/Elements";
import User from "../server/Entities/User" 
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Service from '../server/Service';
import UserRoutes from '../server/Routes/UserRoutes';

const RegisterContainer = Container;
const RegisterBox = Box;

const PORT = process.env.REACT_APP_LOCALPORT;
const _routes = new UserRoutes();

const MySwal = withReactContent(Swal);

export const RegisterForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  

  const [userState, setUser] = React.useState([]);
  
  const validate = () => {  
    console.log(userState);
    if(userState.Username === "" || userState.Email === "" || userState.Password === ""){
      MySwal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return false;
    }
    if(userState.Password !== document.getElementById("cpassword").value){
      MySwal.fire({
        title: 'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
      });
      return false;
      }
    return true;
  }
  
  function reg() {
    const user = new User();
    user.setUsername(document.getElementById("Username").value);
    user.setEmail(document.getElementById("Email").value);
    user.setPassword(document.getElementById("Password").value);

    setUser(user);

    const route = _routes.Replace(_routes.Post(), null, null);


    if(!validate(user)){
      return;
    }

    const _service = new Service(
      route,
      "application/json",
      "POST",
      user
    );

    _service.response().then((data) => {
      console.log(data);
        if(!data){
          MySwal.fire({
            title: 'Error!',
            text: 'No ha sido posible registrar el usuario',
            icon: 'error',
          });
          return;
        }

        MySwal.fire({
          title: 'Éxito!',
          text: 'Usuario registrado correctamente',
          icon: 'success',
        });

    });
    
  }

  return (
    <RegisterContainer className="h-100% md:h-dvh">
      <RegisterBox>
        <Title>Registro</Title>
        <RegisterForm>      
          <div className="w-[300px]">
          <InputGroup className="">
            <Label htmlFor="Username">Usuario</Label>
            <Input type="text" id="Username" placeholder="Ingrese su usuario" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="Email">Correo Electrónico</Label>
            <Input type="email" id="Email" placeholder="Ingrese su correo electrónico" />
          </InputGroup>
          </div>
          <div className="w-[300px]">
          <InputGroup>
            <Label htmlFor="Password">Contraseña</Label>
            <Input type="password" id="Password" placeholder="I ngrese su contraseña" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="cpassword">Confirmar Contraseña</Label>
            <Input type="password" id="cpassword" placeholder="Confirme su contraseña" />
          </InputGroup>
          </div>
        </RegisterForm>
          <Button onClick={reg} type="submit">Registrarse</Button>
          <TextLink>
            ¿Ya tienes una cuenta? <Link href="/">Inicia sesión aquí</Link>
          </TextLink>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Register;
