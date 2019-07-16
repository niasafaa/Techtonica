// Welcome to the prework assessment!
//Nia Charrington

// Exercise 1. Declare a variable called animal and give it a value of your choice

let animal = "Cat";

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"

if (animal === "lion") {
  console.log("I'm scared!");
} else if(animal === "dog"){
  console.log("So cute");
}else if(animal === "frog"){
  console.log("Ribbit ribbit");
} else {
  console.log("Just another animal")
}

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
let person1Age = 12;
let person2Age = 62;

if (person1Age < 18 && person2Age){
  console.log("You are both children");
} else { 
  console.log("At least one adult here");
}

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)

for(let i = 20; i >= 10; i--){
  console.log(i);
}

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
let a = 5;
while(a<=50) {
  console.log(a);
  a += 5;
}

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
const iceCreamFlavors = ['chocolate', 'vanilla', 'strawvberry'];

// Exercise 7. Update the second element of the array to be a different value
iceCreamFlavors[1] = 'cookie dough';

// Exercise 8. Add 2 more items to the array

iceCreamFlavors.push('coffee', 'banana');

console.log(iceCreamFlavors);
// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
const multiply = (num1, num2, num3) => {return num1 * num2 * num3};

console.log(multiply(1, 2, 3));

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even

const evenOrOdd = myInt => {
  if (myInt % 2 === 0){
    return `${myInt} even`;
  }else{
    return `${myInt} odd`;
  }
}

console.log(evenOrOdd(5));

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)

const pet = {animal: "dog", age: 4};




// Exercise 12. Print the pet's age
console.log(pet['animal']);
// Exercise 13. Update pet's age to be a different value

pet['age'] = 5

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String - A string is colleciton of char values.
// Number - An int or float data type which can be used in math operations. 
// Boolean - A data type with two possilbe values true or false.
// Array - A collection of elements that are stored together, indexable, and mutable. 
// Object - A datatype which stores a collection of key and value pairs.
// undefined - A placeholder for variables which have not been assigned a vaulue. 



//Exercise 15 Add. a new file to the $PATH environmental variable

//vim ~/.bash_profile
// * i * export $PATH=$PATH:~/atemp/usr/bin *esc wq*

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 

/*
How are the devices on the internet physically connected to each other?
How is information physically transmitted from device to device?
How does one device find another it’s trying to communicate with?
What methods do devices on the internet use to communicate?
*/

/* ANSWER:
When you open your browser and type in a URL the broswer firts checks its own cache to query the IP address associated with that URL.
If the browser does not find it, it then queries your OS, and if not it queries through a series of DNS servers starting with the Root servers until it finds the desired record.
Once the IP address is recieved the browser using HTTP makes a POST request to IP address effectively establishing a client-server connection with ther server hosting the website.
Data is then transmitted between these computers through a series of data tranfers managed by the TCP. The data is tranmitted in bits which are represented in binary.
This binary representation allows for the data to be passed through coaxial cables, fiber optic cables, or radio waves. In most people's home that are connected to the web,
the series of connections are as follows radio waves connect devices to a router, a router is then connected via coaxial cables or fiber optic cables to a network provided by service providers.
The vast network of these different devices and services makes up the internet.
*/



// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.

const howManyAs = (string) => {return string.match(/a/g).length}; 

// found solution here: https://www.w3schools.com/jsref/jsref_match.asp
console.log(howManyAs("Nia Charrington"));

// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string


const howMany = (string, char ) => {
  let regexChar = char;
  let regex = new RegExp(regexChar, "g") // had to look up this syntax since a template literal wouldn't work
  return string.match(regex).length};

//console.log("This is the answer" + howMany("Nia Charrington","r"));

const mostOften = (string) => {
    highestCount = '';
    for(let b = 0; b < string.length; b++){
      if(howMany(string, string[b]) > highestCount.length){
        highestCount = string[b]
      }
    }
    return highestCount
  }

console.log(mostOften("HELLOOOOOOOOX"));