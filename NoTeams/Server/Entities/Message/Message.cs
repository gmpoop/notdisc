namespace Server.DBOContext.Entities.Message
{
    public class Message
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string? Text { get; set; }
        // Relación con la tabla de usuarios
        public DateTime SentAt { get; set; }


    }
}
