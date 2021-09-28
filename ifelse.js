 /*What are Conditional Statements?
In life, we make decisions based on circumstances. 
Think of an everyday decision as mundane as falling asleep — if we are tired, we go to bed, otherwise, we wake up and start our day.
These if-else decisions can be modeled in code by creating conditional statements.
A conditional statement checks a specific condition(s) and performs a task based on the condition(s).
  */

 /*If Statement
We often perform a task based on a condition. For example, if the weather is nice today, then we will go outside. 
If the alarm clock rings, then we’ll shut it off. If we’re tired, then we’ll go to sleep. */
if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
}else{
  console.log('Time to wait for a sale.')
}

/*Comparison Operators

When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

    Less than: <
    Greater than: >
    Less than or equal to: <=
    Greater than or equal to: >=
    Is equal to: ===
    Is not equal to: !==
 */
    let hungerLevel = 7
    if (hungerLevel > 7 ){
      console.log('Time to eat!')
    }else{
      console.log('We can eat later!')
    }

/*Logical Operators

Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

    the and operator (&&)
    the or operator (||)
    the not operator, otherwise known as the bang operator (!)

&&:When using the && operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. 
Otherwise, if either condition is false, the && condition will evaluate to false and the else block will execute. 
||:When using this operator, only one of the conditions must evaluate to true for the overall statement to evaluate to true.
The ! not operator reverses, or negates, the value of a boolean:
 */
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8 ){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
} //output time to sleep as both condition meets

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' || tirednessLevel < 8 ){
  console.log('time to sleep')
}else{
  console.log('not bed time yet')
}
//output time to sleep as one condition met.

/*Truthy and Falsy
Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value. 
So which values are falsy— or evaluate to false when checked as a condition? The list of falsy values includes:

    0
    Empty strings like "" or ''
    null which represent when there is no value at all
    undefined which represent when a declared variable lacks a value
    NaN, or Not a Number
*/
let wordCount = '';

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//output Better get to work


let favoritePhrase = 'HelloWorld';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//output This string doesn't seem to be empty.


/*Truthy and Falsy Assignment
Truthy and falsy evaluations open a world of short-hand possibilities!

Say you have a website and want to take a user’s username to make a personalized greeting. 
Sometimes, the user does not have an account, making the username variable falsy. 
The code below checks if username is defined and assigns a default string if it is not: */
let tool = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
//output The marker is mightier than the sword

/*Ternary Operator
In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else statement.  */
let isLocked = false;

 isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');


let isCorrect = true;
isCorrect ? console.log('Correct!') :
  console.log('Incorrect!');


let favoritePhrase = 'Love That!';

(favoritePhrase === 'Love That!') ? console.log('I love that!') : console.log("I don't love that!");

/*Else If Statements

We can add more conditions to our if...else with an else if statement. The else if statement allows for more than two possible outcomes. 
You can add as many else if statements as you’d like, to make more complex conditionals! */

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
}else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.')
}else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
}else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

/*SWITCH STATEMENT
A switch statement provides an alternative syntax that is easier to read and write. */
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition){
 case 'first place' :
 console.log('You get the gold medal!')
 break;
 case 'second place' :
 console.log('You get the silver medal!')
 break;
 case 'third place' :
 console.log('You get the bronze medal!')
 break;
 default :
 console.log('No medal awarded.')
 break;
}