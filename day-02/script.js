// function calc(a, b) {
//   console.log(a + b);
//   console.log(b);
// }

// calc(10, 15);

function createId(str) {
  return str.toLowerCase() + 4864894;
}

let firstName = "Katharina";
let id = createId(firstName);

function greeting() {
  console.log("Willkommen " + firstName);
}

function multiplyByTen(a) {
  return a * 10;
}

function isAllowed(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

if (multiplyByTen(20) > 100) {
  console.log("Das ist größer als 100");
} else {
  console.log("Das ist kleiner als 100");
}

if (isAllowed(17)) {
  console.log("Er ist berechtigt");
} else {
  console.log("Keine Berechtigung");
}
