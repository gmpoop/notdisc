using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Server.DBOContext;
using Server.DBOContext.Entities.User;

namespace Server.Services
{
    public interface IChatService
    {
        void AddUser(string connectionId, string userName);
        void RemoveUser(string connectionId);
        List<User> GetAllUsers(string username);
        void AddMessage(string connectionId, string message);
        List<string> GetMessage(string connectionId);
    }

    public class ChatService : IChatService
    {

        private readonly Dictionary<string, string> _connectedUsers = new Dictionary<string, string>();
        private readonly Dictionary<string, string> _existingUsers = new Dictionary<string, string>();
        private readonly Dictionary<string, List<string>> _userMessage = new Dictionary<string, List<string>>();
        private readonly ApplicationDbContext _context;

        public ChatService(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        public void AddUser(string email, string userName)
        {

            if (!_existingUsers.ContainsKey(email))
            {
                _connectedUsers.Add(email, userName);
                _existingUsers.Add(email, userName);
                _userMessage.Add(email, new List<string>());
            }
            else
                throw new Exception("El usuario ya existe dentro de la base de datos");

        }

        public void RemoveUser(string connectionId)
        {
            _connectedUsers.Remove(connectionId);
            _userMessage.Remove(connectionId);
        }

        public List<User> GetAllUsers(string email)
        {

            var users = _context.User.  
                        Where(u => u.Email == (!email.IsNullOrEmpty() ? email : u.Email)).
                        ToList();

            return users;
        }

        public void AddMessage(string connectionId, string message)
        {
            if (_userMessage.ContainsKey(connectionId))
            {
                _userMessage[connectionId].Add(message);
            }
        }

        public List<string> GetMessage(string connectionId)
        {
            if (_userMessage.ContainsKey(connectionId))
            {
                return _userMessage[connectionId];
            }

            return new List<string>();
        }

    }
}
