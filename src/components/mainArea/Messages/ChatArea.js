// src/components/ChatArea.js
import React from 'react';
import styled from 'styled-components';
import MyMessage from './Message';
import { FaVideo } from 'react-icons/fa';
import UserItem from '../UserItem';



const ChatContainer = styled.div`
flex-grow: 1;   
position: relative;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-height: 500px;
`;



const ChatTopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  width: 100%;
  margin: 5px;
  padding-bottom: 5px;  
  border-bottom: 2px solid #ddd;
  background-color: #fff;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: auto;      
  overflow-y: auto;
  background-color: #fff;
  min-height: 460px;
`;




const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  width: 95%;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #fff;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #2C2C2C;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff7a2f;
  }
`;

function ChatArea() {
  return (
    <ChatContainer>      
        <ChatTopBar>
            <UserItem urlImage="https://randomuser.me/api/portraits/men/32.jpg">
                    Carlos Pecina
            </UserItem>   
        </ChatTopBar>
      {/* Aquí irían los mensajes */}
        <ChatBox>
        {/* Mensaje de otro usuario */}
        <MyMessage isMyMessage={false}>User1: Hola, ¿cómo estás?</MyMessage>

        {/* Mensaje del usuario actual */}
        <MyMessage isMyMessage={true}>   Todo bien, ¿y tú?</MyMessage>
        <MyMessage isMyMessage={false}>   Todo bien, ¿y tú?</MyMessage>
        <MyMessage isMyMessage={true}>   Todo bien, ¿y tú?</MyMessage>
        <MyMessage isMyMessage={false}>   Todo bien, ¿y tú?</MyMessage>
        <MyMessage isMyMessage={true}>   Todo bien, ¿y tú?</MyMessage>
        <MyMessage isMyMessage={false}>Lol
        </MyMessage>
        <MyMessage isMyMessage={false}>   Todo bien, ¿y tú?</MyMessage>

        </ChatBox>

      {/* Input para enviar mensajes */}
      <InputContainer>
      <FaVideo />
        <Input type="text" placeholder="Escribe un mensaje..." />
        <Button>Enviar</Button>
      </InputContainer>
    </ChatContainer>
  );
}

export default ChatArea;
