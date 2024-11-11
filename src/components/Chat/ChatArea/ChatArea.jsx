import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyMessage from '../../Message/Message';
import { FaVideo } from 'react-icons/fa';
import UserItem from '../../Elements/UserItem';
import useSignalRConnection from '../../server/Connection/SignalRConnection';
import useMessages from '../../server/Connection/useMessages';
import signalRService from '../../server/Connection/signalRService';


const PORT = process.env.REACT_APP_LOCALPORT;

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
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');


  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUsername(user.username);
    }
  }, []);

  const url = new URL(`${PORT}chatHub`).toString();
  const connection = useSignalRConnection(url, username);
  const messages = useMessages(connection, username);

  const sendMessage = async () => {
    if (connection && message) {
      try {
        await connection.invoke('SendMessage', username, message);
        setMessage('');
      } catch (e) {
        console.error('Error al enviar mensaje: ', e);
      }
    }
  };

  return (
    <ChatContainer>
      <ChatTopBar>
        <UserItem urlImage="https://randomuser.me/api/portraits/men/32.jpg">
          Carlos Pecina
        </UserItem>
      </ChatTopBar>
      <ChatBox>
        {messages.map((msg, index) => (
          <MyMessage
            ismymessage={(msg.user === username).toString()}
            key={index}
          >
            {msg.user} {msg.message}
          </MyMessage>
        ))}
      </ChatBox>
      <InputContainer>
        <FaVideo />
        <Input
          type="text"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={sendMessage}>Enviar</Button>
      </InputContainer>
    </ChatContainer>
  );
}

export default ChatArea;
