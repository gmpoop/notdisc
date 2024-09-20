import React from "react";
import styled from "styled-components";


// Estilo del contenedor principal
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
   /* Color de fondo de la página */
`;

// Estilo del cuadro de Log In
export const Box = styled.div`
  background-color: #fff; /* Fondo blanco */
  padding: 40px;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  max-width: 90%;
  max-height: 90%;
`;

// Título del formulario
export const Title = styled.h2`
  color: #333; /* Color oscuro del título */
  text-align: left;
  margin-bottom: 30px;
  font-weight: 500; /* Peso de fuente mediano */
`;

// Agrupación de cada campo del formulario
export const InputGroup = styled.div`
  margin: 20px;

`;

// Estilo de etiquetas de campos
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333; /* Color oscuro del texto */
  font-size: 14px;
`;

// Estilo del campo de entrada
export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc; /* Borde gris claro */
  border-radius: 5px;
  font-size: 16px;
`;

// Botón de acción
export const Button = styled.button`
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
export const TextLink = styled.p`
  text-align: center;
  margin-top: 30px;
  color: #666; /* Color gris suave */
`;

export const Link = styled.a`
  color: #333; /* Color oscuro para enlaces */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
