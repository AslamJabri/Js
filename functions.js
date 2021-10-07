/*What are Functions?

In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, 
we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again.
We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task. */

/*Function Declarations

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. 
Just like how a variable declaration binds a value to a variable name,a function declaration binds a function to a name, or an identifier.
A function declaration consists of:

    The function keyword.
    The name of the function, or its identifier, followed by parentheses.
    A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.
*/
    greetWorld(); // Output: Hello, World!

        function greetWorld() {
        console.log('Hello, World!');
    }


/*Parameters and Arguments

    So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. 
    When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). 
    We use parameters as placeholders for information that will be passed to the function when it is called.  */
    function sayThanks(name) {
        console.log('Thank you for your purchase '+ name +'! We appreciate your business.');
      }
      sayThanks("Cole")

//Default Parameter

/*

One of the features added in ES6 is the ability to use default parameters. 
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. */
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }


  //function expression syntax
    const calculator = function (width , height){
        const area = width * height
        return area
    }
    //arrow function syntax
    const calculator1 = (width , height) => {
        const area = width * height
        return area
    }

//concise arrow notation
    //single line
    const sumName = num => num+num
    //multi line
    const sumNumber = number => {
        const sum = number + number
        return sum
    }
