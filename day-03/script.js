// Task 03.01
function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

// Task 03.02
function calcGrossPrice(netPrice, tax) {
  return netPrice * tax + netPrice;
}

// Task 03.03
function addPositive(a, b) {
  if (a < 0) {
    a = -a;
  }

  if (b < 0) {
    b = -b;
  }

  return a + b;
}

// Task 04.01
let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  return name.length;
}

const result = getUserNameLength(userName);

console.log(result > 4);
// ^______________ Should log true
