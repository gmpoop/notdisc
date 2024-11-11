import React, { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const AppDataInterchange = (newConnection) => {
    const [userList, setUserList] = useState([]);
    const [chatStats, setChatStats] = useState("");
    const [connection, setConnection] = useState(null);
    
    useEffect(() => {
        // Inicializa la conexión a SignalR
        setConnection(newConnection);
        
        // Inicia la conexión y llama a varios métodos
        newConnection.start().then(async () => {
          try {
            // Llamada a UserConnected
            const users = await newConnection.invoke("UserConnected");
            setUserList(Object.entries(users).map(([key, value]) => ({ id: key, name: value })));
    
            // Llamada a GetChatStatistics
            const stats = await newConnection.invoke("GetChatStatistics");
            setChatStats(stats);
          } catch (error) {
            console.error("Error:", error);
          }
        });
    
        return () => {
          newConnection.stop();
        };
      }, []);
      
      const handleSendMessage = async (userId, message) => {
        if (connection) {
          try {
            const success = await connection.invoke("SendMessageToUser", userId, message);
            if (success) {
              console.log("Mensaje enviado con éxito");
            } else {
              console.log("No se pudo enviar el mensaje");
            }
          } catch (error) {
            console.error("Error al enviar mensaje:", error);
          }
        }
      };
      
  return userList;

};

export default AppDataInterchange;
