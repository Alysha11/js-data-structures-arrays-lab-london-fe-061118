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
  const driversNew = drivers.slice();
  driversNew.pop(name)
  return driversNew
}

