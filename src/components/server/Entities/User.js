
class User {

    constructor() {
        this.Id = null;
        this.Connection = "";
        this.Username = "";
        this.Fullname = "";
        this.Email = "";
        this.Password = "";
        this.TimeStampIns = "";
        this.TimeStampUpd = "";
        this.urlImage = "";
    };

getUsername() {
    return this.Username;
}

getEmail() {
    return this.Email;
}

getPassword() {
    return this.Password;
}

getId() {
    return this.Connection;
}

setUsername(Username) {
    this.Username = Username;
}

setEmail(Email) {
    this.Email = Email;
}

setPassword(Password) {
    this.Password = Password;
}

setId(Connection) {
    this.Connection = Connection;
}
}

export default User;