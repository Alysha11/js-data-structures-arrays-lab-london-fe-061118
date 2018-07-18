// Write your solution here!\
const drivers = ["Milo", "Otis", "Garfield"]


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

function appendDriver(name) {
  const driversNew = drivers.slice();
  driversNew.push(name)
  return driversNew
}

function prependDriver(name) {
  const newDrivers = drivers.slice();
  newDrivers.unshift(name)
  return newDrivers

}

function removeLastDriver() {
  return drivers.splice(2,3);
}

function removeFirstDriver() {
  return drivers.slice(0,1)
}



