// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    strArray=str.split("");
    newStr = strArray.reverse();
    newStr = newStr.join("");
    console.log(newStr);
}
reverseString("hello");

function reverseString2(str) {
    str = str.split("").reverse().join("");
    console.log(str)
}

reverseString2("CareerDevs")