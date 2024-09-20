import React from "react";
import styled from "styled-components";
import {Container, Box, Title, InputGroup, 
        Label, Input, Button, TextLink, Link} 
        from "../elements/elements";

// Reutilizar estilos del componente de Log In
const RegisterContainer = Container;
const RegisterBox = Box;

export const RegisterForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Register = () => {
  return (
    <RegisterContainer className="h-100% md:h-dvh">
      <RegisterBox>
        <Title>Registro</Title>
        <form className="">
        <RegisterForm>      
          <div className="w-[300px]">
          <InputGroup className="">
            <Label htmlFor="username">Usuario</Label>
            <Input type="text" id="username" placeholder="Ingrese su usuario" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input type="email" id="email" placeholder="Ingrese su correo electrónico" />
          </InputGroup>
          </div>
          <div className="w-[300px]">
          <InputGroup>
            <Label htmlFor="password">Contraseña</Label>
            <Input type="password" id="password" placeholder="Ingrese su contraseña" />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
            <Input type="password" id="confirm-password" placeholder="Confirme su contraseña" />
          </InputGroup>
          </div>
        </RegisterForm>
          <Button type="submit">Registrarse</Button>
          <TextLink>
            ¿Ya tienes una cuenta? <Link href="/">Inicia sesión aquí</Link>
          </TextLink>
        </form>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default Register;
