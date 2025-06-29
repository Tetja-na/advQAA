const person = {
  firstName: "Tetiana",
  lastName: "Gruenert",
  age: 38
};

person.email = "blabla@blabla";

delete person.age;

console.log(person); 
