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

class House {
  constructor(maxAllowedApartm) {
    this.maxAllowedApartm = maxAllowedApartm;
  }
  houseApartments = [];

  addApartment (apartment) {
    if(this.houseApartments.length < this.maxAllowedApartm) {
      this.houseApartments.push(apartment);
    } else {
      console.log('No more space for the apartment in this house');
    }
  }
}

const personOne = new Human('Sergii', 'male');
const personTwo = new Human('Viktoria', 'female');
const personThree = new Human('Viktor', 'male');
const personFour = new Human('Natali', 'female');

const firstApartment = new Apartment;
firstApartment.addMember(personOne);
firstApartment.addMember(personFour);

const secondApartment = new Apartment;
secondApartment.addMember(personTwo);

const thirdApartment = new Apartment;
thirdApartment.addMember(personThree);

console.log(firstApartment, secondApartment, thirdApartment);

const firstHouse = new House(2);
firstHouse.addApartment(firstApartment);
firstHouse.addApartment(secondApartment);
console.log(firstHouse);

firstHouse.addApartment(thirdApartment);
console.log(firstHouse);