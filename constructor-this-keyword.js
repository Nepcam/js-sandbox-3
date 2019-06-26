// Person constructor
function Person(name, dob){  // Constructors should start with a capital
  this.name = name;    // this - refers to the current instance of the object. in this case it refers to the Person/function scope 
  // this.age = age;
  this.birthday = new Date(dob);  
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  } 
  // console.log(this) // this - returns the function 'Person'
}
// console.log(this); // this - console.log is set in global scope, and therefore returns the { window object }

// const cam = new Person('Cam', 42);
// const mason = new Person('Mason', 19);

// console.log(cam.age);

const cam = new Person('Cam', '03=20-1977');
console.log(cam.calculateAge());