//Basics Javascript programs

//alert and prompt
//let userName=prompt("What is your User name");
//let password=prompt("What is you email");
//alert("Entered credential is invalid");

//operators -arithmetic operators
function arithmeticOperators(a,b){
    let add=a+b;
    console.log(add);
    let sub=a-b;
    console.log(sub);
    let multi=a*b;
    console.log(multi);
    let div=a/b;
    console.log(div);
    let mod=a%b;
    console.log(mod);
}
arithmeticOperators(5,4);

//logical operators
let character='i';
if(character=='a' || character=='e' || character=='i' || character=='o' || character=='u'){
    console.log("It is a vowel")
}
else{
    console.log('It is a consonant')
}

//Vaiables and scope;
let value=10;
var number=20;
console.log(value);
console.log(number);
function variablesScope(){
    let a=30;
    var b=40;
    console.log(value);
    console.log(number);
    console.log(a);
    console.log(b);
}
variablesScope();
//console.log(a);
//console.log(b);

//data types
let numbers=10;
console.log(numbers);
console.log(typeof(numbers));

let names="Vaidhee";
console.log(names);
console.log(typeof(names));

let booleanValues=true;
console.log(booleanValues);
console.log(typeof(booleanValues));

let nullValue=null;
console.log(nullValue);
console.log(typeof(nullValue));

let undefinedValue;
console.log(undefinedValue);
console.log(typeof(undefinedValue));

//Function
//Normal Function
 function normalFunction(a,b){
        let product=a*b;
        console.log(product);
}
normalFunction(3,4);

//function Expression
let functionExpression=function(name){
     console.log("hello"+" " +name);
}
functionExpression("Vaidhee");

//arrow function
let addition=(a,b)=>a+b
     console.log(addition(2,3));

//Immediately invoked function Expression
     let result=(function (){ 
          let x=25;
          let z=30;
          return x+z;
    })();
    console.log(result);

    //anonymous Function
       (function(){
          console.log("This function is a anonymous function");
       })();

    //return function
        function returnFunction(a,b){
              return a/b;
    }
    console.log(returnFunction(6,3));

    //higher order function
         function higherOrderFunction(a){
            return function (b){
                console.log(a*b);
            }
         }
         higherOrderFunction(2)(3);   

  //callback function-Ex 1
  function input(callback){
        let age=25;
        callback(age);
  }
     input (function(age){
        console.log("Age is:"+age);
     });

//callback function-Ex-2
     function callBackFunction(name, callback){
              console.log("Hello"+" " +name);
              callback();
     }
     function callme(){
          console.log("This is a callback function");
     }
     callBackFunction("vaidhee",callme);
 
  
  //If else
let evenOdd=19;
if(evenOdd%2==0){
    console.log("The number is even");
}
else{
    console.log("The number is odd");
}


//if else if else ladder
let rating=4;
if(rating<=2){
    console.log("bad ratings");
}
else if(rating>=4){
    console.log("good ratings");
}
else{
    console.log("Average ratings");
}

//nested if-else
let num=12;
if(num>0){
    console.log("The number is positive")
 
  if(num%2==0){
    console.log("The number is even")
   }
   else{
    console.log("The number is odd");
   } 
}
else{
    console.log("The number is negative");
}

//Ternary operator
let marks=30;
let exams=(marks>=40) ? "pass" :"fail";
console.log(`marks: ${exams}`);

//switch statement
let orderFood="briyani";
switch(orderFood){
    case "idly":
    console.log("The order food is idly ");
    break;
    case "dosa":
    console.log("The order food is dosa");
    break;
    case "briyani":
    console.log("The order food is briyani");
    break;
    case "paniyaram":
    console.log("The order food is paniyaram");
    break;
    default:
        console.log("The order food item is invalid");
}

//while loop
let i=1;
  while(i<=5){
    console.log(i +"*2=" +i*2);
    i++;
}

// Hoisting :

//var supporting hoisting
console.log(a);
 var a=5;

 //let and const not support hoisting
//console.log(b) ;
let b=1;

//console.log(c);
const c=4;

//normal function support hoisting but arrow function not support hoisting
add();
function add(){
      let a=1;
      let b=2;
      console.log(a+b);
}
//add();

//arrowFunctions(4,5)
let arrowFunctions=()=>a+b;
console.log(arrowFunctions(4,5));


//do while loop
let test = 1;
do {
    console.log(test);
    test++;
} while(test<=5)



//array
let colors=["blue","red","white","black"];
console.log(colors);
console.log(colors.length);
console.log(colors[2]);

//push method
colors.push("yellow");
console.log(colors);

//popUp method
colors.pop();
console.log(colors);

//unShift method
colors.unshift("green");
console.log(colors);

//shift method
colors.shift();
console.log(colors);

//slice method
let sliceColors=colors.slice(1,3);
console.log(colors);
console.log(sliceColors);

let sliceColor=colors.slice(2,5);
console.log(sliceColor);

//splice method
colors.splice(1,3);
console.log(colors);

//colors.splice(1,3);
console.log(colors);

colors.splice(2,2,"Violet");
console.log(colors);

//map()
let upperColors=colors.map(colors=>colors.toUpperCase());
console.log(upperColors);

//filter()
let filterColors=colors.filter(colors=>colors.length>4);
console.log(filterColors);

//for Each
colors.forEach(color=>console.log(color));

//for loop
for(i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//for of loop
for(let color of colors){
    console.log(color);
}

//object and JSON Iteration
//for in loop
let student={
    name:"vaidhee",
    class:"FSD course",
    age:25

};

for(let key in student){
 console.log(key +":"+student[key]);
}


//object.keys() and object.values()
let keys=Object.keys(student);
let values=Object.values(student);
console.log(keys);
console.log(values);

//Iteration over JSON
let jsonData = [{
    name: "vaidhee",
    age: 25,
    city: "erode"
  },
  {
    name: "sandy",
    age: 29,
    city: "tiruppur"
  },
  {
    name: "surya",
    age: 20,
    city: "erode"
  }]
  jsonData.forEach((i,j)=>{
    console.log(i.name);
    console.log(i.age);
    console.log(i.city);    
})

let results = jsonData.map((i, j) => {
    if (i.age > 25) { 
        console.log(i.name);
        console.log(i.age);
        console.log(i.city);
        return { name: i.name, age: i.age, city: i.city }; 
    }
    return null; 
})
console.log(results);








