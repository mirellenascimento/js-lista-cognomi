// input
var allSur = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
console.log("Surname List= ", allSur);
var userInput = prompt("Inserisci il tuo cognome:");
console.log("User input= ", userInput);

// title case
userInput = userInput.toLowerCase().split(' ');
  for (var i = 0; i < userInput.length; i++) {
    userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
  }
userInput = userInput.join(' ');
console.log("User input Title Case= ", userInput);

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
