namespace Server.DBOContext.Entities.Group
{
    public class Group
    {
        public int Id { get; set; }
        public int UserQuantity { get; set; }
        public required string UsersId { get; set; }
        // Relación con la tabla de usuarios
        public required string Name { get; set; }

    }
}
