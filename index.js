// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}
 function destructivelyRemoveFirstDriver() {
     drivers.shift();
 }

 function appendDriver (broom) {
    return [...drivers, broom];
  }
  
  function prependDriver (arnold) {
    return [arnold, ...drivers];
  }

 function removeFirstDriver () {
    return drivers.slice(1);
  }
  
  function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
  }