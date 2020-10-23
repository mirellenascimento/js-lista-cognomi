
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// input
var allSur = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log("Surname List= ", allSur);
var userInput = prompt("Inserisci il tuo cognome:");
console.log("User input= ", userInput);

// Title Case function
function titleCase(userInput) {
  userInput = userInput.toLowerCase().split(' ');
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
  }
  return userInput.join(' ');
}


// processing
allSur.push(userInput);
allSur.sort();

// output

for (var i = 0; i < allSur.length; i++) {
  console.log("Ordered list ", allSur[i]);
};

// document.getElementById("surnamelist").innerHTML = "<li>" + allSur[2] + "</li>";
