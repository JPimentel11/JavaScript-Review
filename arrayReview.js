var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last (inputArr) {
  return inputArr[inputArr.length-1];
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
function removeOdds(inputArr) {
  var evenArr = [];
  for (var i = 0; i < inputArr.length; i++) {
    if (inputArr[i] % 2 === 0) {
      evenArr.push(inputArr[i]);
    }
  }
  console.log(evenArr);
}

removeOdds(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here
function rndNumCheck (randNum, randArr) {
  var result = false;
  console.log(randNum);
  for (var i = 0; i < randArr.length; i++) {
    if (randArr[i] === randNum) {
      result = true;
    }
  }
  alert(result);
}

rndNumCheck(getRandomArbitrary(), randomArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
var copyArr = [];
for (var i = 0; i < first.length; i++) {
  copyArr.push(first[i]);
}
copyArr.push(6, 7);
second = copyArr;

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
function longest (inputSentence) {
  var sentArray = inputSentence.split(" ");
  var longest = '';
  for (var i = 0; i < sentArray.length; i++) {
    if (longest.length < sentArray[i].length) {
      longest = sentArray[i];
    }
  }
  console.log(longest);
  return longest;
}

longest(sentence);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
function capitalize (inputSentence) {
  var sentenceArray = inputSentence.split(' ');
  for (i = 0; i < sentenceArray.length; i++) {
    var letters = sentenceArray[i].split('');
    letters[0] = letters[0].toUpperCase();
    sentenceArray[i] = letters.join('')
  }
  return sentenceArray.join(" ");
}

console.log(capitalize(myPoem));
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter (inputStr) {
  var counter = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var myArr = inputStr.split('');
  for (var i = 0; i < myArr.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (myArr[i] === vowels[j]) {
        counter = counter + 1;
      }
    }
  }
  return counter;
}

console.log(vowelCounter(theOdyssey));
