const rollDice = function(numOfDice, sidesOfDice) {
  let result = 0;
  for(let i = 0; i < numOfDice; i++){
    result += (Math.floor(Math.random() * Math.floor(sidesOfDice)) + 1);
  }

  return result;
}

const handleSubmit = function() {
  let values = document.getElementById("diceValues").value;
  let valuesArray = values.split('\n');

  let numAndSides;
  let rolledNums = [];

  valuesArray.map((value) => {
    numAndSides = value.split('d');
    // numAndSides.map((value) => {
    //   let isnum = /^\d+$/.test(value);
    //   console.log(isnum);
    // });

    let rolledDice = rollDice(numAndSides[0], numAndSides[1]);
    rolledNums.push(rolledDice);
  });

  document.getElementById('main').innerHTML = `<p>${valuesArray[0]} : ${rolledNums[0]}</p>`;

  event.preventDefault();
}
