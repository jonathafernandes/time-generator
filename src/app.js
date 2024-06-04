const createTimes = () => {
    const form = document.querySelector('.form');

    document.getElementById('createTimesButton').addEventListener('click', function() {
    form.style.display = 'none';
    drawLots();
  });

  function drawLots() {
    let maxValue = document.getElementById('maxValue').value;
    let numbersPerDraw = document.getElementById('quantity').value;

    numbersPerDraw = parseInt(numbersPerDraw, 10);

    if (numbersPerDraw < 4 || numbersPerDraw > 5) {
      alert("A quantidade de jogadores em cada time deve estar entre 4 e 5!");
      return;
    }

    maxValue = parseInt(maxValue, 10);

    if (maxValue < 8 || maxValue > 25) {
      alert("O número total de jogadores deve estar entre 8 e 25!");
      return;
    }

    const resultList = document.getElementById('results');
    resultList.innerHTML = '';

    const possibleNumbers = Array.from({ length: maxValue }, (_, i) => i + 1);

    const quantityDraws = 5;
    for (let raffle = 1; raffle <= quantityDraws; raffle++) {
      const numbersDrawn = generateNoRepetition(possibleNumbers, numbersPerDraw);

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