using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController(DataContext context) : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<AppUser>> SaveUser(AppUser user)
        {
            var result = await context.Users.AddAsync(user);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await context.Users.ToListAsync();
            if(users == null) return NotFound("Record Not Found!");
            return users;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            var user = await context.Users.FindAsync(id);
            if (user == null) return NotFound("User Not Found!");
            return user;
        }
        [HttpPut]
        public async Task<ActionResult<AppUser>> UpdateUser(AppUser user)
        {
            var existingUser = await context.Users.FindAsync(user.Id);
            if (existingUser == null)
            {
                return NotFound("User Not Found!");
            }

            existingUser.Username = user.Username;
            await context.SaveChangesAsync();
            return Ok(existingUser);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<AppUser>> DeleteUser(int id)
        {
            var user = await context.Users.FindAsync(id);
            if (user == null) return NotFound("User Not Found!");
            context.Users.Remove(user);
            await context.SaveChangesAsync();
            return Ok("Recorded Deleted Successfully");
        }
        [HttpGet("Search")]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetSearchedUser(string name, string email)
        {
            var users = await context.Users.Where(u=>u.Username.ToLower() == name.ToLower() || u.Email.ToLower() == email.ToLower()).ToListAsync();
            if(users == null)
            {
                return NotFound("User Not found");
            }
            return users;
        }   
    }
}