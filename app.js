import './public/style.css'

import createTimesCustomCreation from './src/createTimesCustomCreation.js';
import createTimesDefaultCreation from './src/createTimesDefaultCreation.js'

const title = document.querySelector('.title');
const resultContent = document.querySelector('.resultContent');
const defaultCreationButton = document.getElementById('defaultCreationButton');
const customCreationButton = document.getElementById('customCreationButton');
const backButton = document.getElementById('backButton');

defaultCreationButton.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreationButton.style.display = 'none';
  customCreationButton.style.display = 'none';
  backButton.style.display = 'block';

  resultContent.innerHTML = `
    <div data-aos="zoom-out" class="form">
      <label for="quantity">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
      <input type="number" id="quantity" min="4" max="5" value="5">
      <br>    
      <label for="maxValue">Digite o total de jogadores (entre 10 e 25):</label>
      <input type="number" id="maxValue" min="10" max="25" value="25">

      <br>
      <br>
      
      <button id="createTimesDefaultCreationButton">Definir times</button>
    </div>

    <ul id="resultsList"></ul>
  `;
  createTimesDefaultCreation();
});

customCreationButton.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreationButton.style.display = 'none';
  customCreationButton.style.display = 'none';
  backButton.style.display = 'block';

  resultContent.innerHTML = `
    <div data-aos="zoom-out" class="form customCreation">
      <label for="quantity">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
      <input type="number" id="quantity" min="4" max="5" value="5">
      <br>    
      <label for="maxValue">Digite o total de jogadores (entre 10 e 25):</label>
      <input type="number" id="maxValue" min="10" max="25" value="25">

      <br>
      <br>
      
      <button id="nextButton">Próximo</button>
    </div>

    <ul id="results"></ul>
  `;

  resultContent.addEventListener('click', event => {
    const target = event.target;
  
    if (target.id === 'nextButton') {
      const maxValue = document.getElementById('maxValue').value;
      let inputsHTML = '';
  
      for (let i = 0; i < maxValue; i++) {
        inputsHTML += `
          <input type="text" class="playerName" placeholder="Nome do jogador ${i + 1}">
          <input type="number" class="playerLevel" min="1" max="5" value="5" ${i + 1}">
          <br>
        `;
      }
  
      resultContent.innerHTML = `
        <div data-aos="zoom-out" class="form">
          <label>Insira os nomes e níveis dos jogadores:</label>
          <br>
          <div class="inputPlayers">
            ${inputsHTML}
          </div>
          <br>
          <button id="createTimesCustomButton">Definir times</button>
        </div>
    
        <ul id="results"></ul>
      `;
    }
  });
  

  createTimesCustomCreation();
});

backButton.addEventListener('click', () => {
  title.style.display = 'block';
  defaultCreationButton.style.display = 'block';
  customCreationButton.style.display = 'block';
  backButton.style.display = 'none';

  resultContent.innerHTML = '';
});