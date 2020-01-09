// question 1: Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var myPet = ["cat", "cow", "dog"];

// question 2: Console log the value of the second item in petArray.

console.log("cow");

// question 3: Add the item "sheep" to petArray using the push method.

myPet.push("sheep");

// question 4: Console log how many items there are now in petArray using the length method.

console.log(myPet.length);

// question 5: Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject = {
    name: "felix",
    colour: "black",
    age: 4 
}

// question 6: Console log the value of the third property of catObject.

console.log(catObject.age);

// question 7: Take the value of catObject (the {} part) and place it inside an array called catArray.

var catArray = [
    {
        name: "felix",
        colour: "black",
        age: 4
    }
];

// question 8: Loop throughcatArray and console log each property of each object inside (there will be only 1 object inside).

for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

// question 9: Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole (age) {
console.log(age)

}

logToConsole(25);

// question 10: Call the logToConsole function and pass in the value "donkey".

function logToConsole(age) {
    console.log("donkey " + age);
}

logToConsole("age");
