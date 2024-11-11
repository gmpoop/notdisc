using Microsoft.EntityFrameworkCore;
using Server.DBOContext.Entities.User;
using Server.DBOContext.Entities.Message;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using Server.DBOContext.Entities.Chat;

namespace Server.DBOContext
{
    public class ApplicationDbContext : DbContext
    {
        static ApplicationDbContext? _context;
        static DbContextOptionsBuilder<ApplicationDbContext>? _options;
        readonly string _connectionString = string.Empty;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {


        }
        //public ApplicationDbContext(string conneciton)
        //{
        //    _connectionString = conneciton;
        //}   

        // Method to get the context
        public static ApplicationDbContext DbGetConnection()
        {
            if (_context != null)
            {
                return _context;
            }
            else
            {
                _context = CreateNewConnection();
            }
            return _context;
        }

        // Private method to create a new connection
        private static ApplicationDbContext CreateNewConnection()
        {
            try
            {
                // Se asegura de que _options esté inicializado con las configuraciones requeridas
                _options ??= new DbContextOptionsBuilder<ApplicationDbContext>()
                                .UseSqlServer()
                                  .EnableSensitiveDataLogging(false)
                                  .LogTo(Console.WriteLine, LogLevel.Information)
                                  .LogTo(Console.WriteLine, LogLevel.Error);  // Replace with your actual connection string

                return new ApplicationDbContext(_options.Options);
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error al momento de crear la base de datos {e.Message}");
                throw;
            }
        }
        // Agrega aquí las tablas que deseas mapear
        public DbSet<User> User { get; set; }   
        //public DbSet<Message> Message { get; set; } s
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Puedes agregar configuraciones adicionales para tus tablas aquí

            modelBuilder.Entity<User>()
            .HasKey(u => u.Id);
        }
        public DbSet<Message> Message { get; set; } = default!;
        public DbSet<Server.DBOContext.Entities.Chat.Chat> Chat { get; set; } = default!;
        
        
    }
}
