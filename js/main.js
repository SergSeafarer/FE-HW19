class Human {
  constructor (name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  apartmentMembers = [];

  addMember (person) {
    this.apartmentMembers.push(person);
  }
}