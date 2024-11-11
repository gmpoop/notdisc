namespace Server.DBOContext.Entities.Chat
{
    public class Chat
    {
        public int Id { get; set; }
        public int idUser1 { get; set; }
        public int idUser2 { get; set; }
        public string? Name { get; set; }
    }
}
