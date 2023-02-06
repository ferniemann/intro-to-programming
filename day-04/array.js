// Wie sieht ein Array aus?
const fruits = ["Apple", "Banana", "Peach"];

// Wozu brauche ich ein Array?
// Ein Array ist eine Liste von Elementen; z.B. von Usern
const users = [
  { user: "Ferdinand", role: "student" },
  { user: "Katharina", role: "admin" },
];

// Wie spreche ich ein Array und einzelne Einträge richtig an?
console.log(fruits); // Ausgabe: ["Apple", "Banana", "Peach"]
console.log(fruits[0]); // Ausgabe: "Apple"
console.log(users[1]); // Ausgabe: {user: "Katharina", role: "student"}
console.log(users[1].user); // Ausgabe: "Katharina"

// Wie kann ich etwas zum Array hinzufügen?
// z.B: mit der Methode push()
fruits.push("Lemon"); // fruits = ["Apple", "Banana", "Peach", "Lemon"]
// ^Arr.^Methode

const arr = ["Hallo"]; // arr.length = 1

// Was ist bzw. macht ein For-Loop?
// Ein For-Loop startet bei einem bestimmten Wert und endet bei einem anderen Wert und so lange wiederholt er seinen Block
for (let index = 0; index < fruits.length; index++) {
  // fruits.length = 4
  console.log(index);
  console.log(fruits[index]);
}

for (let index = 0; index < users.length; index++) {
  if (users[index].user === "Katharina") {
    console.log("Katharina ist an Index " + index);
  }
}

for (let i = 10; i > -10; i--) {
  console.log(i);
}

// For-Of-Loop
for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}

for (let user of users) {
  if (user.role === "admin") {
    console.log("Permission granted for " + user.user);
  } else {
    console.log("Permission not granted for " + user.user);
  }
}
