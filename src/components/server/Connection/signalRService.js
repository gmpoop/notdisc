// signalRService.js
import * as signalR from '@microsoft/signalr';

const PORT =  process.env.REACT_APP_LOCALPORT; // URL de tu servidor

class SignalRService {
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${PORT}chatHub`) // URL de tu ChatHub
      .withAutomaticReconnect()
      .build();

  }

  // Método para manejar la reconexión
  async startConnection() {
    try {
    if(this.connection.state !== signalR.HubConnectionState.Connected){
        await this.connection.start();
        console.log("Conexión de SignalR establecida.");
    }
    } catch (error) {
      console.error("Error al conectar con SignalR:", error);
    }
  }

  async stopConnection() {
    try {
        if(this.connection.state === signalR.HubConnectionState.Connected){
            await this.connection.stop();
            console.log("Conexión de SignalR cerrada.");
        }
    } catch (error) {
      console.error("Error al cerrar la conexión con SignalR:", error);
    }
  }

  // Método que espera a que la conexión esté establecida antes de ejecutar un comando
  async invokeMethod(method, ...args) {
    if (this.connection.state !== signalR.HubConnectionState.Connected) {
      console.log("Esperando que la conexión esté lista...");
      await this.startConnection();
    }
    return this.connection.invoke(method, ...args);
  }

  async getUserConnected() {
    try {
      const users = await this.invokeMethod("UserConnected");
      return Object.entries(users).map(([key, value]) => ({ id: key, name: value }));
    } catch (error) {
      console.error("Error al obtener usuarios conectados:", error);
      return [];
    }
  }

  async getChatStatistics() {
    try {
      return await this.invokeMethod("GetChatStatistics");
    } catch (error) {
      console.error("Error al obtener estadísticas:", error);
      return "No disponible";
    }
  }

  async sendMessageToUser(userId, message) {
    try {
      return await this.invokeMethod("SendMessageToUser", userId, message);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      return false;
    }
  }
}

const signalRService = new SignalRService();
export default signalRService;
