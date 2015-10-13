var message = "Hello, world :-)";
var amIAwesome = true;
console.log("Am I awesome?", amIAwesome);

var salary = 12;
var monthlySalary = salary * 12;
console.log("monthlySalary = ", monthlySalary);

var isPurple = true;
// When condition is true
if (isPurple === true) {
	console.log("isPurple");
}
// When condition is false
else {
	console.log("isPurple");
}

// How many hours are in a year
var secondsInMinute = 60;
console.log("seconds in one minute = ", secondsInMinute);
var secondsInHour = 60*secondsInMinute;
console.log("seconds in one hour", secondsInHour);
var secondsInDay = 24*secondsInHour;
console.log("secondsInDay = ", secondsInDay);
var secondsInYear = 365*secondsInDay;
console.log("secondsInYear = ", secondsInYear);
var hoursInYear = secondsInYear / secondsInHour;
console.log("hoursInYear = ", hoursInYear);


// How many minutes in a decade

var minutesInDecade = secondsInYear*10/secondsInMinute;
console.log("Minutes in one decade = ",minutesInDecade)

// How many second old I am
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log("datetime = ",datetime);

// Calculate current age in seconds
var _initial = '1989-02-03T00:00:00.000Z';
var fromTime = new Date(_initial);
var toTime = new Date();

var differenceTravel = toTime.getTime() - fromTime.getTime();
var ageInSeconds = Math.floor((differenceTravel) / (1000));
console.log("In seconds, I am this old",ageInSeconds);

var ageInYears = Math.floor(ageInSeconds / secondsInYear);
console.log("ageYears",ageInYears);

var remainder = ageInSeconds % secondsInYear;
console.log("remainder",remainder);
var ageInDays = Math.floor(remainder / secondsInDay);
console.log("ageDays",ageInDays);

remainder = remainder % secondsInDay;
console.log("remainder",remainder);
var ageInHours = Math.floor(remainder / secondsInHour);
console.log("ageHours",ageInHours);

remainder = remainder % secondsInMinute;
console.log("remainder",remainder);
var ageInMinutes = Math.floor(remainder / secondsInMinute);
console.log("agInMinutes",ageInMinutes);

ageInSeconds = remainder % secondsInMinute;
console.log("ageInSeconds",ageInSeconds);

// practice for loops
colors = ["red","orange","yellow","green","blue","indigo","violet"];
for (var i=0; i<colors.length; i++) {
	console.log(colors[i]);
}

// Using arrays
rainbow = ["red","orange","yellow","green","blue","indigo","violet"];

//array.push();
//array.push();
//array.shift();
//array.unshift();

// for loop incrementing counter by 10
for (i=0; i <= 100; i += 10) {
	console.log("i = ",i);
}

// Write a for loop that divides the counter variable by 2 each time, and displays the value.
for (var i = 1024; i >= 2; i /= 2) {
	console.log("i = ",i);
}

// Augment loop to
numbers = []; 
for (var i = 1024; i >= 2; i = i/2) {
	numbers.unshift(i);
	console.log(numbers);
}

// add even numbers to beginning, odd to end of array
moreNumbers = [];
for (i=100; i > 0; i--) {
	if(i%2===0) {moreNumbers.unshift(i)}
	else {moreNumbers.push(i)}
}
	console.log(moreNumbers);

// String concatentation
var firstName = "Caleb";
var lastName = "Scholze";
var fullName = firstName + " " + lastName;
console.log("fullname: ",fullName);

//Search for character
console.log(fullName.indexOf("e"));

//search for index
console.log(fullName.charAt(6));

//replace part of a string
console.log(fullName.replace("Scholze","Smith"));

// convert string to text
var number = "1000";
var integer = parseInt(number);
console.log(number===1000);

// Javascript
var stuff=document.getElementById("container");
console.log("stuff",stuff);
