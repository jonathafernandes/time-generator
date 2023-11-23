const createTimes = () => {
    document.getElementById('button').addEventListener('click', function() {
    drawLots();
  });

  function drawLots() {
    var quantityNumbers = document.getElementById('quantity').value;
    var maxValue = document.getElementById('maxValue').value;

    quantityNumbers = parseInt(quantityNumbers, 10);

    if (quantityNumbers < 4 || quantityNumbers > 5) {
      alert("A quantidade de jogadores em cada time deve estar entre 4 e 5!");
      return;
    }

    maxValue = parseInt(maxValue, 10);

    if (maxValue < 10 || maxValue > 25) {
      alert("O número total de jogadores deve estar entre 10 e 25!");
      return;
    }

    var resultList = document.getElementById('results');
    resultList.innerHTML = '';

    var possibleNumbers = Array.from({ length: maxValue }, (_, i) => i + 1);

    for (var raffle = 1; raffle <= quantityNumbers; raffle++) {
      var numbersDrawn = generateNoRepetition(possibleNumbers, quantityNumbers);

      var listItem = document.createElement('li');
      listItem.innerHTML = `<strong>Time ${raffle}</strong> <br> ${numbersDrawn.join(', ')}`;
      resultList.appendChild(listItem);
    }
  }

  function generateNoRepetition(possibleNumbers, quantity) {
    var numbersDrawn = [];

    for (var i = 0; i < quantity; i++) {
      if (possibleNumbers.length === 0) {
        return [];
      }

      var randomIndex = Math.floor(Math.random() * possibleNumbers.length);
      var selectedNumber = possibleNumbers.splice(randomIndex, 1)[0];
      numbersDrawn.push(selectedNumber);
    }

    return numbersDrawn;
  }
}

export default createTimes;