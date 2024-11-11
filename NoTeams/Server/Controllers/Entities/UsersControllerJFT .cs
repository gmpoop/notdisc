using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DBOContext;
using Server.DBOContext.Entities.User;
using Server.Services;


namespace Server.Controllers.Entities
{
  
    public class UserControllerJFT : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ChatService _chatService;
        public UserControllerJFT(ApplicationDbContext context, ChatService chatService)
        {
            _context = context;
            _chatService = chatService;

        }

        [HttpGet("{ }")]
        public async Task<IActionResult> GetUser(string email)
        {
            try
            {
                var users = _chatService.GetAllUsers(email);
                return Ok(users);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            finally 
            {
                _context.SaveChanges();
            }


        }

        [HttpPost]
        public async Task<IActionResult> InsertUser(string id, string conection_id, string user, string email)
        {

            var newUser = new User
            {
                Connection = conection_id,
                Username = user,
                Email = email,
                Password = "Contraseña",
                Fullname = "Carlos Alberto Pecina Aguirre",
                TimeStampIns = "DateTime.Now",
                TimeStampUpd = null,
                UrlImage = null,

            };

            try
            {
                _chatService.AddUser(email, user);

                _context.User.Add(newUser);
                await _context.SaveChangesAsync();

                //var userResponse = await _context.User.FindAsync(Connection);

                //return Ok(userResponse);
                return Ok(newUser);
            }
            catch (Exception e)
            {
    
                return BadRequest(e.Message);
            }

        }
    }
}
