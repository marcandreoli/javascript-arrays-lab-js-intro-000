const app = "I don't do much.";


function destructivelyAppendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
};


var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, newElement) {
<<<<<<< HEAD
  var newArray = [newElement, ...array]
  return newArray
};

function destructivelyAddElementToBeginningOfArray(array, newElement) {
=======
  newArray = [newElement, ...array]
  return newArray
};

var destructivelyAddElementToBeginningOfArray(array, NewElement) {
>>>>>>> 3131d3c31c958ffcf2f58db2f92f80c4f636d850
  array.unshift(newElement)
  return array
};

function addElementToEndOfArray(array, newElement) {
<<<<<<< HEAD
  var newArray = [...array, newElement]
=======
  newArray = [...array, newElement]
>>>>>>> 3131d3c31c958ffcf2f58db2f92f80c4f636d850
  return newArray
};

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement)
  return array
};
<<<<<<< HEAD

function accessElementInArray(array,index) {
  return array[index];
};

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
};

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);
  return newArray;
};

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);
  return newArray;
}
