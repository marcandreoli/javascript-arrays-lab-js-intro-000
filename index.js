const app = "I don't do much.";


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
};

function destructivelyPrependKitten(kittens, name) {
  var newArray = [...kittens, name];
  return newArray;
};

function destructivelyAppendKitten() {
  var newArray = kittens.pop()
  return newArray;
};
