const app = "I don't do much.";

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function structivelyPrependKitten(kittens, name) {
  var newArray = [name, ...kittens];
  return newArray;
};

function destructivelyppendKitten() {
  var newArray = kittens.pop()
  return newArray;
};
