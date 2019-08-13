class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.userEvents = [];
    this.id = ''; // function to generate ids
  }

  addPhoto(photo) {
    this.photo = photo;
  }
}

module.exports = User;
