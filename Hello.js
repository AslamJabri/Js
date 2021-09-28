//console.log helps you print the output whatever goes in console log it spits out the output
//example
console.log(25) //output 25
console.log(25.4) //output 25.4

/*DataTYPES
1) Numbers : any number including numbers with decimals ie 1,5,2,23.5 ....
2)string :any group of characters on your keyboard (letters,numbers,spaces,symols) surrounded by  ' ' single quotes
    or " " double quotes.
3)Boolean : these data types only has two possible values used in decision conditions and more ie true or false.
4)Null : this data represent the intentional absence of value.
5)Undefined : It also represents the absence of a value though it has a different use than null.
6)Symbol : A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
7)Object: Collections of related data.
*/
/*
Arithmetic Operators
    Add: +
    Subtract: -
    Multiply: *
    Divide: /
    Remainder: %
*/
console.log(28+3.5)
console.log(2021 - 1969)
console.log(65 / 240)
console.log(0.2708 * 100)


/* String Concatenation : Operators aren’t just for numbers! When a + operator is used on two strings, 
it appends the right string to the left string */
console.log('Hello' + 'World')
console.log('Hello'+ ' ' + 'World')
/*Properties
When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. 
Every string instance has a property called length that stores the number of characters in that string.
 You can retrieve property information by appending the string with a period and the property name:  */ 

 console.log('Hello How are you?'.length)
 /* Methods:
    Remember that methods are actions we can perform. JavaScript provides a number of string methods.

    We call, or use, these methods by appending an instance with:

    a period (the dot operator)
    the name of the method
    opening and closing parentheses

    E.g. 'example string'.methodName().
    console.log('hello'.toUpperCase()); // Prints 'HELLO'
    console.log('Hey'.startsWith('H')); // Prints true
 */
    console.log('Codecademy'.toUpperCase());
    console.log('    Remove whitespace   '.trim());

/*Variables - In programming, a variable is a container for a value. 
    You can think of variables as little containers for information that live in a computer’s memory. 
    Information stored in variables, such as a username, account number, or even personalized greeting can then be found in memory.*/
    //eg 
    var favoriteFood = 'pizza'
    var numOfSlices = 8
    console.log(favoriteFood)
    console.log(numOfSlices)

/* Create a Variable: let
    As mentioned in the previous exercise, the let keyword was introduced in ES6.
    The let keyword signals that the variable can be reassigned a different value.
    Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. 
    In such a case, the variable will be automatically initialized with a value of undefined:*/
    let changeMe = true
    changeMe = false //reassigned
    console.log(changeMe) //output false

/*Create a Variable: const
    The const keyword was also introduced in ES6, and is short for the word constant. Just like with var and let you can store any value in a const variable. 
    The way you declare a const variable and assign a value to it follows the same structure as let and var. 
        However, a const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.
        Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.  */
        const changeMe = true
        changeMe = false 
        console.log(changeMe)
         //type error because tried reassigned.

/*String Concatenation with Variables
    In previous exercises, we assigned strings to variables. Now, let’s go over how to connect, or concatenate, strings in variables.*/
    let myPet = 'armadillo';
    console.log('I own a pet ' + myPet + '.'); 
    //Output: 'I own a pet armadillo.' 

/*String Interpolation
In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using template literals. 
Check out the following example where a template literal is used to log strings together: */
    let myPet1 = 'armadillo';
    console.log(`I own a pet ${myPet1}.`);
// Output: I own a pet armadillo.

/*typeof operator
While writing code, it can be useful to keep track of the data types of the variables in your program.
 If you need to check the data type of a variable’s value, you can use the typeof operator.  */
let myName = 'hello'
console.log(typeof myName)

