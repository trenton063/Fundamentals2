'use strict';


// let hasDriversLicense = false;
// const pastTest = true;

// if (pastTest) hasDriversLicense = true;
// console.log('I can drive');

// // wrong
// // const interface = 'Audio';
// // const private = 534;
// // const if = 23;

// function logger() {
//     console.log(`My name is Trenton`);
// }

// // calling / running / invoking function

// logger(); 
// logger(); 
// logger(); 

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} organes`
//     return juice
// }

// const appleJucie = fruitProcessor(5,0);
// console.log(appleJucie);

// const appleOrangeJucie = fruitProcessor (2,4);
// console.log(appleOrangeJucie);

// //Function daclaration 
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // Function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// //arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilretirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;  
//     return `${firstName} retires in ${retirement} year`;
// }

// console.log(yearUntilretirement(1991, 'Trenton'));
// console.log(yearUntilretirement(1980, 'Bob'));



// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of organes`
//     return juice
// };

// console.log(fruitProcessor(2,3));


// const calcAge = function(Year) {
//     return 2037 - Year;
// }

// const yearUntilretirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearUntilretirement(1991, `Trenton`));
// console.log(yearUntilretirement(1950, `Mike`));


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, together with the victory points, according to the rule above.
 Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;


// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54,49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolhins, avgKoalas) {
//     if (scoreDolphins >= 2 * scoreKoalas){
//         console.log(`Dophines win with a score of ${scoreDolphins} Koalas lost with a score of ${scoreKoalas}`);
//         return checkWinner
//     } else if (scoreKoalas >= 2 * scoreDolphins) {
//         console.log(`Koalas win with a score if ${scoreKoalas} Dolphins lost with a score of ${scoreDolphins}`);
//         return checkWinner
//     } else {
//         console.log(`nobody wins`);
//         return checkWinner
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = `Michael`;
// const friend2 = `steven`;
// const friend3= `Peter`;

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// // can't change the whole array becasue it is a const

// const firstName = `trenton`;
// const trenton = ['firstName', 'conner', 2037 - 1991, 'teacher', friends];
// console.log(trenton);
// console.log(trenton.length);

// // Array exercise 

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; 

// //add elements
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// //
// friends.unshift('John');
// console.log(friends);

// //remove elements
// friends.pop(); //remove last element 
// const popped = friends.pop(); 
// console.log(popped);
// console.log(friends);

// //remove element to end
// friends.shift(); // remove first
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push('23');
// console.log(friends.includes('Steven'));
// console.log(friends.includes('bob'));
// console.log(friends.includes('23'));

// if (friends.includes('Steven')) {
//     console.log('you have a friend called peter');
// }


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the 
corresponding tip, calculated based on the rules above (you can check out the code from 
    first tip calculator challenge if you need to). Use the function type you like the most. 
    Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// //arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const billBeforeTip = 430;
// const Tips = [125, 555, 44];
// const calcTip = Tips => billBeforeTip >= 50 && billBeforeTip<= 300 ? billBeforeTip * .15 : billBeforeTip * .20; {
// }

// const billBeforeTip = 430;
// const Tips = [125, 555, 44];

// const totalBill1 = billBeforeTip + Tips[0];
// const totalBill2 = billBeforeTip + Tips[1];
// const totalBill3 = billBeforeTip + Tips[2];

// console.log(totalBill1);
// console.log(totalBill2);
// console.log(totalBill3);



// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);


// const trenton = {
//     firstName: 'Trenton', 
//     lastName: 'Conner',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// //Dot vs braket
// const trenton = {
//     firstName: 'Trenton', 
//     lastName: 'Conner',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(trenton);

// console.log(trenton.lastName);
// console.log(trenton['lastName']);

// const nameKey = 'Name';
// console.log(trenton['first' + nameKey]);
// console.log(trenton['last' + nameKey]);

// const interestedIn = prompt('What do you wan tto know about Trenton? Choose between firstName, lastName, age, job, and friends');

// if (trenton[interestedIn]) {
// console.log(trenton[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// trenton.location = 'America';
// trenton['twitter'] = '@nothing';
// console.log(trenton);

// // challenge

// console.log(`${trenton.firstName} has ${trenton.friends.length} friends, and his best friends is called ${trenton.friends[0]}`);

// const trenton = {
//     firstName: 'Trenton', 
//     lastName: 'Conner',
//     age: 46,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function() {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return;
//     },

//     getSummary: function() {
//         return `${trenton.firstName} is a ${trenton.age}-year old ${trenton.job} and he has a driver's License`
//     }
// };

// console.log(trenton.age);
// console.log(trenton.age);
// console.log(trenton.age);

// //challage
// //"Trenton is a 46-year old teacher. "

// // console.log(`${trenton.firstName} is a ${trenton.age}-year old ${trenton.job} and he has a driver's License`);



///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height).
 (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
 Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/


// const john = {
//     kg: 93,
//     meters: 1.95,
// }

// const johnCalcBMI = john.kg / john.meters ** 2;

// const marks = {
//     kg: 78,
//     meters: 1.69
// }

// const marksCalcBMI = marks.kg / marks.meters ** 2;

// if (marksCalcBMI > johnCalcBMI) {
//     console.log(`marks BMI ${marksCalcBMI} is greater than johns BMI with ${johnCalcBMI}`);
// } else if (johnCalcBMI > marksCalcBMI) {
//     console.log(`johns BMI ${johnCalcBMI} is greater than marks BMI with ${marksCalcBMI}`);
// } else {
//     console.log(`They tied both with a BMI of ${marksCalcBMI}`);
// }

// console.log(johnCalcBMI);
// console.log(marksCalcBMI);


// console.log(`Lifting weights repetition 1 `);
// console.log(`Lifting weights repetition 2 `);
// console.log(`Lifting weights repetition 3 `);
// console.log(`Lifting weights repetition 4 `);
// console.log(`Lifting weights repetition 5 `);
// console.log(`Lifting weights repetition 6 `);
// console.log(`Lifting weights repetition 7 `);
// console.log(`Lifting weights repetition 8 `);
// console.log(`Lifting weights repetition 9 `);
// console.log(`Lifting weights repetition 10 `);

//for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const trenton = [
//     'Trenton', 
//     'Conner',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const types = [];

// for (let i = 0; i < trenton.length; i++) {
//     // Reading from trenton array
//     console.log(trenton[i], typeof trenton[i]);

//     //filling array
//     // types[i] = typeof trenton[i];
//     types.push(typeof trenton[i]);
// }

// console.log(types);

// const years = [
//     1991,
//     2007,
//     1969,
//     2020
// ];

// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue and break 

// for (let i = 0; i < trenton.length; i++) {
//     if(typeof trenton[i] !== 'string') continue;

//     console.log(trenton[i], typeof trenton[i]);
// }

// console.log(`--- Break with number ---`)
// for (let i = 0; i < trenton.length; i++) {
//     if(typeof trenton[i] === 'number') break;

//     console.log(trenton[i], typeof trenton[i]);
// }

// // const trenton = [
// //     'Trenton', 
// //     'Conner',
// //     2037 - 1991,
// //     'teacher',
// //     ['Michael', 'Peter', 'Steven'],
// // ];


// // for (let i = trenton.length - 1; i >= 0; i-- ); {
// //     console.log(trenton[i]);
// // }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--------- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: lifting weights repetition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`);
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !==6 ) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log(`Loop is about to end....`);
// }

