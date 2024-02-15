const createTimes = () => {
    const form = document.querySelector('.form');

    document.getElementById('createTimesButton').addEventListener('click', function() {
    form.style.display = 'none';
    drawLots();
  });

  function drawLots() {
    let quantityNumbers = document.getElementById('quantity').value;
    let maxValue = document.getElementById('maxValue').value;

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

    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    const possibleNumbers = Array.from({ length: maxValue }, (_, i) => i + 1);

    for (let raffle = 1; raffle <= quantityNumbers; raffle++) {
      const numbersDrawn = generateNoRepetition(possibleNumbers, quantityNumbers);

      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <div data-aos="zoom-out">
          <strong>Time ${raffle}</strong>
          <br/>
          ${numbersDrawn.join(', ')}
        </div>`;
      resultList.appendChild(listItem);
    }
  }

  function generateNoRepetition(possibleNumbers, quantity) {
    const numbersDrawn = [];

    for (let i = 0; i < quantity; i++) {
      if (possibleNumbers.length === 0) {
        return [];
      }

      const randomIndex = Math.floor(Math.random() * possibleNumbers.length);
      const selectedNumber = possibleNumbers.splice(randomIndex, 1)[0];
      numbersDrawn.push(selectedNumber);
    }

    return numbersDrawn;
  }
}

export default createTimes;