const size = 21;
let result;

if (size > 10 && size < 20) {
  result = "Greater than 10";
}
if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Odd / Even Function
function oddEven(num) {
  if (num % 2 === 0) {
    return "even";
  }

  return "odd";
}

// 10 / 2 = 5 => 10 % 2 = 0
// 9 / 2 = 4 und 1 Rest => 9 % 2 = 1
// 5 / 2 = 2 und 1 Rest => 5 % 2 = 1

// Old Young Function

function oldYoung(age) {
  if (age < 0 || typeof age === "string") {
    return "invalid parameter";
  }

  if (age < 16) {
    return "children";
  } else if (age < 50) {
    return "young person";
  } else {
    return "elder person";
  }
}
