import React from 'react';
import styled from 'styled-components';

// Contenedor para la imagen y sus detalles
const ImgItem = styled.div`
  display: flex;
  align-items: center; /* Alinea verticalmente el contenido */
  padding: 5px;
  gap: ${({ gap }) => (gap ? '1em' : '0')}; /* Ajusta el tamaño del gap con un valor predeterminado */
  margin: 5px 0;
`;

// Estilo para la imagen del usuario
const UserImage = styled.img`
  width: ${({ size = '50px' }) => size}; /* Ajusta el tamaño de la imagen con un valor predeterminado */
  height: ${({ size = '50px' }) => size}; /* Asegura que la altura sea igual al ancho para mantener la imagen cuadrada */
  border-radius: 50%; /* Hace que la imagen sea circular */
  border: 1px solid #2C2C2C; /* Borde naranja */
  object-fit: cover; /* Ajusta la imagen para que cubra completamente el contenedor */
`;

// Estilo para el texto del usuario
const UserName = styled.span`
  font-size: 16px;
  color: #333;
`;

const UserItem = ({ children, urlImage, size, gap=true }) => {
    return (
      <ImgItem gap={gap}>
        {/* Usa el componente UserImage para la imagen del usuario */}
        <UserImage src={urlImage} alt="User" size={size} />
        <UserName>{children}</UserName>
      </ImgItem>
    );
  };

export default UserItem;
