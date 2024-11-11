// useMessages.js
import { useEffect, useState } from 'react';

const useMessages = (connection, username) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!connection || !username) return;

    connection.start()
      .then(() => {
        console.log('Conectado a SignalR');

        connection.on('ReceiveMessage', (user, message) => {
          setMessages(messages => [...messages, { user, message }]);
        });

        connection.on('UserJoined', (user) => {
          setMessages(messages => [...messages, { user: username, message: `se unió al chat` }]);
        }); 

        connection.on('UserLeft', (user) => {
          setMessages(messages => [...messages, { user, message: 'dejó el chat' }]);
        });
      })
      .catch(e => console.log('Error en la conexión: ', e));

  }, [connection, username]);

  return messages;
};

export default useMessages;