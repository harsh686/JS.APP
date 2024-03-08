//trim methods.

let msg = " hello "
let msgg = msg.trim();
console.log(msgg);
console.log(msg);
// when we use trim method it does not change the native string(the whitespace present at both ends) instead it simply creates a new string with new changes.

// uppercase and lowercase methods for string

let name = "harsh"
let lastName = name.toUpperCase();
console.log(lastName);

let names = "HARSHVARDHAN"
let lastNames = names.toLowerCase();
console.log(lastNames);

//string methods with arguments
//indexof - it takes the substring as a argument and return it's first index of occurence.

let msggg = "ilikescubadiving";
let task = msggg.indexOf("ving");
console.log(task);

//method chaining - using one method after another // order of execution must be from left to right
let mst = "   hello   "
let msr = mst.trim().toUpperCase();
console.log(msr);
//slice method - as the name suggest , return the part of the main string as nw string
let dam = "ilikeskydiving";
let bridge = dam.slice(1,5);
console.log(bridge);
// another way is simply passing the starting indx and the ending index would automatically be stringlength

let cry = "fornoreason";
let sob = cry.slice(2);
console.log(sob);
console.log(cry.length);

let king = "Harshvardhan";
console.log(king.slice(-2));

//replace method : searched a value in the string and return a new string with replaced value
let stink = "ilikeplayingpool";
let drink = stink.replace("like","love")
console.log(drink);

//repeat method : return a string with number of copies of a string.
let sang = " apple "
let settle = sang.repeat(3);
console.log(settle);