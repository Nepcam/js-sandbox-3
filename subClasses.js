class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// extends Person class with a Customer class - a sub class of Person 
class Customer extends Person { 
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const hone = new Customer('Hone', 'Maaka', '555-555-555', 'Premium');

console.log(hone.greeting());

console.log(Customer.getMembershipCost());