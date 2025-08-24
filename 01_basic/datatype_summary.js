// primitive datatypes or call by value

// there are 7
// string , boolean , null ,number , bigint , symbol , undefined

// reference type or non primitive types
// object , array , function

const heros = { name: "abhi", age: 123, village: "ballia" };

// object
let myObj = {
  name: "Aniket",
  age: 23,
  village: "ballia",
};

//function

const myFunction = function () {
  console.log("Hello, World!");
};

console.log(typeof myObj);
console.log(typeof myFunction);

//******************************************************* */

// memory

// there are two types of memory
// 1 . stack  :- it is used for primitive datatypes  , it gives copy of value
// 2 . heap :- it is used for non primitive datatypes  , it gives reference of value

let myName = " Aniket tiwari";
let anotherName = myName;

 anotherName = " Arvind";
console.log(myName);
console.log(anotherName);


// heap 

let userOne={
    email :"aniket23@gmail.com",
    upiId :" abc@ybl"
}

let userTwo = userOne;

userTwo.email ="abc@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
