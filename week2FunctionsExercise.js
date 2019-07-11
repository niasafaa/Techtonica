// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.


// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

const logGreeting = () => {return 'Hello!'};

//Test
console.log("Exercise 1\n" + logGreeting() + "\n");

// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should // IDEA: return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.

const getName = () => {return "Nia"};

//Test
console.log("Exercise 2\n" + getName() + "\n");

// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().

const logGreeting2 = () => {return `Hello! My name is ${getName()}`};

//Test
console.log("Exercise 3\n" + logGreeting2() + "\n");

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
const sumNum = (num1, num2, num3) => {return num1 + num2 + num3};

//Test
console.log("Exercise 4\n" +
            sumNum(1, 2, 3) + "\n" +
            sumNum(100, -2, 50) + "\n" +
            sumNum(1.25, 2, 30) + "\n"
          );

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

const museumAge = (age) => {
  if(age <= 14 || age >= 65){
    return `You're ${age} so you will get a discount.`;
  } else {
    return false;
  }
}

//Test
console.log("Exercise 5\n" +
            museumAge(25) + "\n" +
            museumAge(2) + "\n" +
            museumAge(72) + "\n"
          );

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

const repeatString = (string, num) => {
  let i = 0;
   while(i <= num) {
      console.log(string);
     i++;
   }
}

//Test
console.log("Exercise 6\n");
repeatString("Happy Hippos", 1)
console.log("Exercise 6\n");
repeatString("Caring Cows", 3)
console.log("Exercise 6\n");
repeatString("Busy Bees", 5)


// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
  return p1 * 2;
}
const y = 4;
const z = mysteryFunction1(y);
console.log("Exercise 7\n");
console.log("The value of y is " + y);
console.log("The value of z is " + z + "\n");

// Without running the code, write down in a comment:
// 1. What mysteryFunction1 does
//Answer: The function multiplies a number or argument by 2.
// 2. What prints out for the value of y
//Answer: 4
// 3. What prints out for the value of z
//Answer 8
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//Answer: I got it right!


// Exercise 8. Read the following code (don't run it yet)
function mysteryFunction2(p1, p2) {
  const x = p1 - p2;
  return x;
}
const a = mysteryFunction2(10, 4);
const b = mysteryFunction2(a, 1);

console.log("Exercise 8\n");
console.log("The value of a is " + a);
console.log("The value of b is " + b);

// Without running the code, write down in a comment:
// 1. What mysteryFunction2 does
//Answer: Function returns the difference between p1 and p2.
// 2. What prints out for the value of a
//Answer: 6
// 3. What prints out for the value of b
//Answer: 5
// Now run the code and see if you're correct.
// Were you correct? If not, what did you learn?
//Answer Mostly right although I did consider wether or not const would misbehave from being re-initialized.


// Exercise 9. This exercise is to practice reading the documentation for functions.
// String.split() is a function in the JavaScript standard library that you can use in your code.
// Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Try to use it to solve the following challenges:

// Here's a string I made representing my grocery list.
// Using split() and groceryList, make an array of my grocery list items
const groceryList = "eggs,carrots,orange juice"
const stringToArray = (string) => {return string.split(",")}
console.log("Exercise 9\n");
console.log(stringToArray(groceryList));

// Here's a string I made representing my morning schedule.
// Using split() and mySchedule, make an array of the *first 2* things I do in the morning
// There are multiple ways to do this, but try doing it using only the split() function.
const mySchedule = 'wake up--->brush teeth--->eat breakfast--->go to work'

const stringMorning = (string) => {return string.split('--->', 2)}
console.log("Exercise 10\n");
console.log(stringMorning(mySchedule));


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//Answer: Not bad at all. I had a little confusion about when its possible to leave out return in an arrow function,
// but other than that I felt I could complete the questions easily.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
