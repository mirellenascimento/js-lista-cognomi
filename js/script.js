
// Chiedere all'utente il cognome
// inserirlo in un array con altri cognomi: 'Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// input
var allSur = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log("Surname List= ", allSur);
var userInput = prompt("Inserisci il tuo cognome:");
console.log("User input= ", userInput);

// document items
var list = document.getElementById("surnameList");
var number = document.getElementById("userNumber");

// processing
allSur.push(userInput);
allSur.sort();

// output

for (var i = 0; i < allSur.length; i++) {
  console.log("Ordered list ", allSur[i]);
  list.innerHTML += "<li>" + allSur[i] + "</li>";

  var position = 0;
  if (userInput == allSur[i]){
    position = i;
    number.innerHTML = "Sei il candidato di numero: " + (position + 1);
    console.log(position);
  }


  };
