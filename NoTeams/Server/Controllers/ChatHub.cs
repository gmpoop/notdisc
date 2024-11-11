using Microsoft.AspNetCore.SignalR;
using Server.Controllers.Entities;

using Server.DBOContext;


namespace Server.Controllers
{
    public class ChatHub : Hub
    {
        // Un diccionario para almacenar los usuarios conectados y sus conexiones
        private static Dictionary<string, string> ConnectedUser = new Dictionary<string, string>();

        public required ApplicationDbContext _context;

        public override async Task OnConnectedAsync()
        {
            // Obtén un nombre de usuario único para cada nueva conexión
            var userGuid = Context.ConnectionId; // Podrías asignar nombres de usuario manualmente
    
            // Agrega el usuario conectado a la lista de usuarios
            ConnectedUser[Context.ConnectionId] = userGuid;

            // Notifica a todos los clientes que un nuevo usuario se ha unido
            await Clients.All.SendAsync("UserJoined", userGuid);
            await base.OnConnectedAsync();
        }


        public override async Task OnDisconnectedAsync(Exception exception)
        {
            // Elimina al usuario de la lista cuando se desconecta
            if (ConnectedUser.ContainsKey(Context.ConnectionId))
            {
                var userGuid = ConnectedUser[Context.ConnectionId];
                ConnectedUser.Remove(Context.ConnectionId);

                // Notifica a todos los clientes que el usuario se desconectó
                await Clients.All.SendAsync("UserLeft", userGuid);
            }

            await base.OnDisconnectedAsync(exception);
        }

        // Método para enviar mensajes
        public async Task SendMessage(string user, string message)
        {
            try
            {   
                // Recupera el nombre del usuario conectado
                await Clients.All.SendAsync("ReceiveMessage", user, message);
            }
            catch (Exception ex)
            {
                // Log the exception to help debug
                Console.WriteLine($"Error al enviar mensaje: {ex.Message}");
                throw;
            }
        }

        public async Task<Dictionary<string, string>> UserConnected()
        {
            
            return ConnectedUser;
        }
    }

}
