using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.DBOContext;
using Server.Services;

namespace Server.DBOContext.Entities.User
{
    public class UserService : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ChatService _chatService;
        
        public UserService(ApplicationDbContext context, ChatService chat) 
        {

            this._context = context;
            this._chatService = chat;

        }

        [Route("/Index")]
        public async Task<IActionResult> Index()
        {
            var users = await _context.User.ToListAsync();
            return Json(users);
        }

        [Route("/Details")]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User
                .FirstOrDefaultAsync(m => m.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }

        // GET: Users/Create
        [Route("/Create")]
        public IActionResult Create()
        {
            return View();
        }

        // GET: Users/Edit/5
        [Route("/Edit")]

        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }

        [Route("/Delete")]
        // GET: Users/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.User
                .FirstOrDefaultAsync(m => m.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            return View(user);
        }
        public bool UserExists(int? id)
        {
            return _context.User.Any(e => e.Id == id);
        }


    }
}
