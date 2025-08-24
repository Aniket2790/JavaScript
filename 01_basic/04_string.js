console.log("Hello, World!");

const name = " Aniket";
const count = 33;

// console.log(name + count + "Abc");

console.log(`hello my name is ${name} and my age is ${count}`);

// another way to declared string in javascript

const gameName = new String("Cricket");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName.indexOf("C"));
console.log(gameName.lastIndexOf("C"));
console.log(gameName.substring(0, 3));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(1, 5);
console.log(anotherString);

console.log(anotherString.length);
console.log(anotherString.charAt(0));
console.log(anotherString.indexOf("C"));
console.log(anotherString.lastIndexOf("C"));
console.log(anotherString.substring(0, 3));

const yetAnotherString = anotherString.substring(0, 4);
console.log(yetAnotherString);
