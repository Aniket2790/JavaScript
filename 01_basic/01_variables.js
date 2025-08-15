const accountId = 12735;
let accountEmail = "tiwarianiket605@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";// in javascript you can create varible without using let data type but this not recomended


let accountState; // this give undefiend on terminal
//accountId = 3; // not allowed

accountEmail = "abcd1@gmail.com";
accountPassword = "8713258";
accountCity = "mumbai";
console.log(accountId);

/*
prefer not to use "var " because of issue in block scope 
in simple word when we define any loop eg. if(){},for(){}
so in this scope var change the value for all the places 

Also in functional scope

*/
console.table([accountEmail, accountId, accountPassword, accountCity , accountState]);
