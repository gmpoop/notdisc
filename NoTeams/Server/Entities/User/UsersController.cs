using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Server.DBOContext;
using Server.DBOContext.Entities;

namespace Server.DBOContext.Entities.User
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly UserService _userService;

        public UsersController(ApplicationDbContext context, UserService userService)
        {
            _context = context;
            _userService = userService;

        }

        [HttpGet("get")]
        public async Task<IActionResult> Get(string? email, int? id)
        {
            try
            {
                if(email != null)
                {
                    var user = _context.User.FirstOrDefault(u => u.Email == email);
                    return Json(user);
                }

                if (id != null)
                {
                    var user = _context.User.FirstOrDefault(u => u.Id == id);
                    return Json(user);
                }

                var users = await _context.User.ToListAsync();
                return Json(users);

            }
            catch (DbUpdateConcurrencyException e)
            {
                return BadRequest(e.Message);
            }
        }

        // POST: Users/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost("create")]
        public async Task<IActionResult> Create([Bind("Connection,Username,Fullname,Email,Password,TimeStampIns,TimeStampUpd, UrlImage")] User user)
        {
            if (ModelState.IsValid)
            {
                _context.Add(user);
                await _context.SaveChangesAsync();

                return RedirectToAction("Index", nameof(UserService));

                // Podrías retornar una vista o devolver los usuarios
                //return View(users);
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPut("update/{id}")]

        public async Task<IActionResult> Edit(int? id, [Bind("Id,Connection,Username,Fullname,Email,Password,TimeStampIns,TimeStampUpd")] User user)
        {

            var userdb = await _context.User.FindAsync(id);

            if (userdb == null)
                return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    userdb.Username = user.Username;
                    userdb.Fullname = user.Fullname;
                    userdb.Password = user.Password;
                    userdb.TimeStampUpd = user.TimeStampUpd;

                    _context.Update(userdb);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_userService.UserExists(user.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index", nameof(UserService));
            }
            return View(user);
        }

        // POST: Users/Delete/5
        [HttpDelete("delete/{id}")]

        public async Task<IActionResult> DeleteConfirmed(int? id)
        {
            var user = await _context.User.FindAsync(id);
            if (user != null)
            {
                _context.User.Remove(user);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction("Index", nameof(UserService));
        }



    }
}
