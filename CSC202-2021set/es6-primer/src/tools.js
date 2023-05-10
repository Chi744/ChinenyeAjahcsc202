//classical Javascript function definition uses the keyword function
//function declaration
/*var logger = function(output){
    console.log(output);
}
*/
// var - variable declaration
//es6 and above allows us toexport declaration, variables, functions ,etc. Therefore we can export logger

//calling the function
/*
logger(""Print me to the console");
logger("Print me again")
*/

export var appName = "ES6 Review";

export var dummyFunction = function () {
    return "I am a dummy function";
}

//arrow function
//rewrite logger function in a way thst is  more es6 , using es6 function
const logger = (output) => {
    console.log(output);
    //keyword function and arrow are the same
    //compare line 12 -14 and 24 -25 
}
export default logger;

//compares line 31 and 18
//expects nothing as parameter
export const dummyFuntion = () => {
    let feedback = "I am a dummy function"; //mutable variable
    feedback = "I am still a dummy function";//value changed
    return feedback;
}
//The concentional way to let people know its not //// is const

//week 7
export const genericFunction = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    const [firstLang, secondLang] = languages; //assign first element in languages array to firstLang and second element to secondLang. 
    //more than one var is being declared above because the inital val of tthe variables can be picked from the same place
    //go to lang pick the first lang and ut it in var called firstlang and so on
    return `First language is ${firstLang} and the second is ${secondLang}`
}

//To create another var to express the rest of the elements -use SPREAD OPERATor by using ... which means thatr
//it is not part of the var name but is part of the  spread operation
export const genericFunction2 = () => {
    const languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //declare an array of elements 
    const [firstLang, secondLang, ...otherLangs] = languages; //assign first element in languages array to firstLang and second element to secondLang. 
    return `First language is ${firstLang} and the second is ${secondLang}.
    Other languages are ${otherLangs}`
}

export const genericFunction4 = () => { //declare an object literal 
    const personalInformation = {
        firstName: 'Pius',
        lastName: 'Onobhayedo',
        gender: 'Male',
        religion: 'Christianity (Catholic)',
        fathersName: 'John',
        mothersName: 'Patricia'
    }

    //Example 3
    //deconstruct into new variables firstName, last name and otherPersonalInfo 
    let { firstName, lastName, ...otherPersonalInfo } = personalInformation;
    return `The first name is ${firstName} and the lastName is ${lastName}. 
Others are: gender = ${otherPersonalInfo.gender}; 
religion = ${otherPersonalInfo.religion}; etc.`;
}

//Default rest parameter
export const genericFunction5 = (a, b = 1) => {
    //This function multiplies any two numbers 
    //if only one argument is sent as argument when function is called, b will default to 1. 
    return (a * b);
}

//Function to multiply any number of numbers
export const multiplier = (...numbers) => {//to send at least 2 numbers
    if (numbers.length < 2)
        throw new Error("Number of arguments must be at least two")


    let product = 1;

    /*for ( let i = 0; i < numbers.length; i++) {
        product*=numbers[i]
    }*/
    //same thing as below
    for (let number of numbers) {
        product *= number
        //exception handling - any function handling that can thr
        return product;
    }
}
export const genericFunction6 = (m, c, ...x) => {
    //This function returns an array of {x,y} objects for all the x arguments passed. 
    //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
    let coordinates = xs.map((x) => {
        return { 'x': x, 'y': (m * x) + c };
    })
    return coordinates;
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below 
    let output = 'The (x,y) values are as follows: '
    for (let coordinate of coordinates) {
        let xy = `(${coordinate.x},${coordinate.y})`
        output += xy;
    }
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario) 
    //coordinates.forEach((coordinate)=>{ 
    // let xy = `(${coordinate.x},${coordinate.y})`; 
    // output+=xy; 
    //}) 
    return output;
}

//Class declaration
export const Person = class {
    constructor(firstName, lastName, gender, height) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
    }

    getFirstName() {
        return toTitleCase(this.firstName)
    }
};
//Do this work
//Create a function that will capitalize the first letter of a string. 
const toTitleCase = (str) => {
    str.toLowerCase();//first set the whole string to lowercase in case 
    return str.substring(0, 0) + str[0].toUpperCase() + str.substring(1);//replace the first character with its uppercase 
}
//static method/class
export class CustomMath {
    static sqrt(a) {
        return Math.sqrt(a);
    }
    static pow(a, b) {
        return Math.pow(a, b);
    }
}

//Inheritance
export class User extends Person {
    constructor(username, password, firstName, lastName, gender, height) {
        super(firstName, lastName, gender, height);
        this.username = username; //property that belongs to user directly also password
        this.password = password;
    }
}
//Using Promise aware functions defined by others defined by me
//Define the function that will return new Promise that wraps the asynchronous call to setTimeout()
export const promiseAwareTimeout = (milliseconds = 1000) => { //The function expects milliseconds to be passed. If not passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
        }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
} 