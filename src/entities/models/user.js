class User {

    id; 
    name;
    email;
    password;
    role;
    registrationDate;

    constructor(userDTO) {
        this.name = userDTO.name;
        this.email = userDTO.email;
        this.password = userDTO.password;
        this.role = userDTO.role;
    }

    get getUser() {
        const user = {
            id:  this.id,
            name: this.name, 
            email: this.email,
            password: this.password,
            role: this.role,
            registrationDate: this.registrationDate
        }

        return user;
    }

    set setRegistrationDate(date) {
        this.registrationDate = date;
    }

    set setId(id) {
        this.id = id;
    }

}

module.exports = User;