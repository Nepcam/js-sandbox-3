// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Cameron', 'Nepe');

// console.log(person1.greeting());

// Cunstomer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // .call - is a function that allows us to call another function from somewhere else in the current context

  this.phone = phone;   // and just add properties if you wish to
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('Liam', 'Nepe', '021-123-456', 'Standard');

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function(){
  return `Kia ora ${this.firstName} ${this.lastName} nau mai haere mai`;
}

console.log(customer1.greeting());