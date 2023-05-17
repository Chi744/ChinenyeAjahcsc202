import logger,{
     appName,
      dummyFunction ,
      genericFunction4,
      multiplier,
      genericFunction5,
      Person,
      CustomMath,
      User,
      promiseAwareTimeout,
    } from './tools.js'
//the logger defined in tools .js has been brought here aand modularization has been achieved
//cause appname isnt in default u import in curly bracket


//logger ("Welcome we are now having fun with modularity");
logger ("Welcome The app name is" + appName + ",There is a function that returns dummyfunction");


/*logger and log are the same because the logger is the default
 and theh system will take it for granted that u wanted to say logger*?*/
//u need to make node know u want to use modularization.
//they want u to do that yourself


//Use template literal to rewrite logger output above using back tick

logger (`Welcome ! The application ae is ${appName}.
is a function that returns ${dummyFunction()}`);

//we are comparing line 7 and line 18-19

logger(genericFunction4(2,3));

logger(multiplier(2,3,4));
//to catch error message
try{
    logger(multiplier(2,3,4,5,10,23,20202,300));
}catch(error){
    logger(error.message)
    //to see everything in total remove the .message
}

logger(genericFunction5(5,-1,4,5,1,3,8));

let person1 = new Person("Pius", "Onobhayedo", "Male",1.7); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 


logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. 
Person 2 is $ {person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter 
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter 
logger(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is $ {person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName.

logger (CustomMath.sqrt(10));
//Promises
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
}).then((data) => {
    logger(`${data}`);//This should output "Timeout is over"
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    logger(`${error}`);
    }); 


//Inheritance

let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
logger(`The username of ${user1.firstName} is ${user1.username}`);
/*
settTimeout(() => { //helps us experience a delay
    //the first argument is a function - a called back function
logger("Timeoout is over again")
},1000) .This was used till the catch (error ) part
*/
//to wrap in a promise
new Promise((resolve, reject)=> {

setTimeout(() => {//this recognizes that it has someone to handle the outcome
    //resolve ("Timeout  is over. Promise, do something!")
    reject ("False alarm!")
}, 3000)
//.then is a call
}).then((data) => {
    logger(`The feedback from Promise is: ${data}`);
//function to act on feedback
}).catch((error) => {
    logger(`There was a Promise reported to Promise: : ${error}`)
})


promiseAwareTimeout(3000)
.then((data)=>{

},
(error)=> {

})

//Using Promise aware functions defined by others 
const url = 'https://jsonplaceholder.typicode.com/users/3'; //Get data for a user with id 1.Changing the 1 to any other nmber gets u data for other s when u run the url on the browser
fetch(url)
 .then(response => response.json()) //convert data returned to json
 .then(
    data => logger(
        `Data: Id = ${data.id},
         Name = ${data.name}, 
         Email = ${data.email},
         lat = ${data.address.geo.lat},
         lng = ${data.address.geo.lng}`)) //use the json data
 //.catch(error => log(`Error: ${error}`));
  
 //for lines 118 -120 compared to line 105.In line 118 a constant is declared but in 105 a cont is invoked
const fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
const fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
const fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array.
.then((data)=>{//data below is indexed eg [0],[1]
 logger(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`);//display data from array
}) 


//Illustrating Async/Await
//It is a way to call functions that return promise. This approach is morr in line with other exception handling conventions

const usePromiseAwareSetTimeout = async  (millisecond) =>{
    
    try{
        const data = await PromiseAwareSetTimeout(millisecond);
        //do what you want with your data
    }catch(error){
        //do what u want with error. 
    }
}

