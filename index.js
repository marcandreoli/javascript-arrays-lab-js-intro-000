const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.shift(name);
  return kittens;
};

function destructivelyPrependKitten(kittens, name) {
  var newArray = [name, ...kittens];
  return newArray;
};

function destructivelyAppendKitten() {
  var newArray = kittens.pop()
  return newArray;
};
