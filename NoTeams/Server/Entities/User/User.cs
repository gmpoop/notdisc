using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;

namespace Server.DBOContext.Entities.User
{
    public class User
    {
        public int? Id { get; set; } 
        public required string Connection { get; set; }
        public string? Username { get; set; }
        public string? Fullname { get; set; }
        public required string? Email { get; set; }
        public required string? Password { get; set; }
        public required string? TimeStampIns { get; set; }
        public required string? TimeStampUpd { get; set; }
        public required string? UrlImage { get; set; }

        public User()
        {
            Init();
        }

        public void Init()
        {
            this.Connection = "";
            this.Username = "";
            this.Fullname = "";
            this.Email = "";
            this.Password = "";
            this.TimeStampIns = "";
            this.TimeStampUpd = "";
        }
    }
    



}
