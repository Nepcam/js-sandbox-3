// Using Object.create

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mere';
mary.lastName = 'Potaka';
mary.age = 30;

mary.getsMarried('Wiremu');

console.log(mary.greeting());

const cam = Object.create(personPrototypes, {
  firstName: {value: 'Cameron'},
  lastName: {value: 'Nepe'},
  age: {value: 42}
});

// console.log(cam)

console.log(cam.greeting())