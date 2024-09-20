import React from "react";
import styled from "styled-components";

// Estilos para el contenedor principal del menú de chats
const ChatMenuContainer = styled.div`
  width: 60%;
  max-width: 100%;
  height: 100vh;
  background-color: #333; /* Fondo oscuro */
  color: #fff; /* Texto blanco */
  display: flex;
  flex-direction: column;
  border-right: 1px solid #444; /* Línea divisoria sutil */
`;

// Barra de búsqueda
const SearchBar = styled.input`
  width: 90%;
  padding: 12px;
  margin: 15px auto;
  background-color: #444; /* Fondo de la barra de búsqueda */
  border: none;
  border-radius: 5px;
  color: #fff; /* Color del texto */
  font-size: 16px;

  &:focus {
    outline: none;
    background-color: #555; /* Cambio de color al enfoque */
  }
`;

// Lista de chats
const ChatList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

// Estilo de cada elemento de chat
const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #444; /* Línea divisoria entre chats */
  transition: background-color 0.2s;

  &:hover {
    background-color: #444; /* Efecto hover */
  }
`;

// Imagen de avatar de chat
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

// Detalles del chat
const ChatDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

// Nombre del usuario
const ChatName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;

// Último mensaje
const LastMessage = styled.p`
  margin: 0;
  color: #ccc; /* Color de texto suave */
  font-size: 14px;
`;

// Componente principal ChatMenu
const GroupMenu = () => {
  // Datos de muestra para los chats
  const chatData = [
    {
      id: 1,
      name: "Dream team",
      lastMessage: "weee hicimos pendejo a padron",
      user: "Maxin",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "POI",
      lastMessage: "¿Estás libre esta tarde?",
      user: "Pepe treviño",
      avatar: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "MATEFEST",
      lastMessage: "Chicos, domingo 15 de septiembre!",
      user: "Mate",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <ChatMenuContainer>
      {/* Barra de búsqueda */}
      <SearchBar type="text" placeholder="Buscar grupos..." />
      {/* Lista de chats */}
      <ChatList>
        {chatData.map((chat) => (
          <ChatItem key={chat.id}>
            <Avatar src={chat.avatar} alt={`${chat.name} Avatar`} />
            <ChatDetails>
              <ChatName>{chat.name}</ChatName>
              <div className="flex gap-3">
              <LastMessage>{chat.user}: {chat.lastMessage}</LastMessage>
              </div>
            </ChatDetails>
          </ChatItem>
        ))}
      </ChatList>
    </ChatMenuContainer>
  );
};

export default GroupMenu;
