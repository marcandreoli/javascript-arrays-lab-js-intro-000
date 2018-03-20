const app = "I don't do much.";

function destructivelyAppendKitten(kittens, name) {
  var newArray = [...kittens, name];
  return newArray;
};

function destructivelyAppendKitten(name) {
  kittens.push(name);
};

function destructivelyAppendKitten() {
  var newArray = kittens.pop()
  return newArray;
};
