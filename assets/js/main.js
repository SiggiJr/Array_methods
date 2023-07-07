"use strict";

//# Array Methoden

//# Level_1_3

const nameArray = ["Micha", "Matthias", "Marco"];

console.log(nameArray.length);

//# Level_1_4

nameArray.push("Felix");
nameArray.push("Jule", "Daniel");
console.log(nameArray);

//# Level_1_5

console.log(nameArray);
console.log(nameArray.pop());
console.log(nameArray);

//# Level_1_6

console.log(nameArray);
console.log(nameArray.shift());
console.log(nameArray);

//# Level_1_7

console.log(nameArray);
console.log(nameArray.push("Boi"));
console.log(nameArray.push("Helmut", "Elfriede"));
console.log(nameArray);
console.log(nameArray.unshift("Vlad"));
console.log(nameArray.unshift("Ali", "Jacub"));
console.log(nameArray);

//# Level_1_8

const reiseziele = ["Schweden", "Polen", "Italien", "Norwegen", "Griechenland"];
console.log(reiseziele);
console.log(reiseziele.slice(1, 3));
console.log(reiseziele);

//# Level_1_9

console.log(reiseziele);
console.log(reiseziele.splice(3, 1, "Finnland"));
console.log(reiseziele);
console.log(reiseziele.splice(2, 1));
console.log(reiseziele);

//# Level_1_10

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const textSplit = text.split(".");
console.log(textSplit);

const splitTextWords = text.split(" ");
console.log(splitTextWords);

const splitTextChars = text.split("");
console.log(splitTextChars);
