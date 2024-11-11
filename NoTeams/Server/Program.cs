using Server.Controllers;
using Microsoft.EntityFrameworkCore;
using Server.DBOContext;
using Server.Services;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using Server.DBOContext.Entities.User;

var builder = WebApplication.CreateBuilder(args);
var webPort = builder.Configuration.GetValue<string>("Ports:React:web");
var localport = builder.Configuration.GetValue<string>("Ports:React:local");
var dbConnection = builder.Configuration.GetConnectionString("Connection");

builder.Services.AddControllers();
builder.Services.AddSignalR(); // Add this line to register SignalR services
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    try
    {
        options.UseSqlServer(dbConnection)
              .EnableSensitiveDataLogging(false)
              .LogTo(Console.WriteLine, LogLevel.Information)
              .LogTo(Console.WriteLine, LogLevel.Error);

        if(builder.Environment.IsDevelopment())
        {
            options.EnableSensitiveDataLogging();
        }
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
    }
   
});

builder.Services.AddControllersWithViews(); // Para MVC


builder.Services.AddScoped<ChatService>();
builder.Services.AddScoped<UserService>();

builder.Services.AddCors(options =>
{
    Console.WriteLine(localport);
    //chrome://settings/security
    //Activar nuevamente seguridad
    options.AddPolicy("AllowReactApp",
        policy =>
        {   
            policy.WithOrigins(localport) // El puerto donde se ejecuta React
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Importante para SignalR
        });
});

var app = builder.Build();
app.UseStaticFiles();
// Usa CORS en la app
app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();

app.MapHub<ChatHub>("/chatHub");
app.MapControllers();

app.Run();
