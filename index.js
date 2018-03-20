const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
};


function addElementToBeginningOfArray(array, newElement) {
  var newArray = [newElement, ...array]
  return newArray
};
