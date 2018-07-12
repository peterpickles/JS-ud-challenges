var firstName = "john";
var age = 28;

console.log(firstName + " " + age);

//Type coercion 
var job, isMarried;
job = "teacher";
isMarried = false;

console.log(firstName + " is a " + age + "year old " + job + ". Is he married? " + isMarried);

//variable mutation
age = "twenty eight";
job = "driver";

alert(firstName + " is a " + age + "year old " + job + "Is he married" + isMarried);

var lastName = prompt("What is his name?").toLowerCase();
console.log(firstName + " " + lastName);