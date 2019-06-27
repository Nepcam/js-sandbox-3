// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){  
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);      
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970)
  // } 
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const cam = new Person('Cameron', 'Nepe', '03-20-1977');
const pae = new Person('Rebecca', 'Jaram', '12-06-1982');

console.log(pae)

console.log(cam.calculateAge());

console.log(cam.getFullName());
2