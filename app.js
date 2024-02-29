import './public/style.css'

import { createTimesCustomCreation } from './src/createTimesCustomCreation.js';
import { createTimesDefaultCreation } from './src/createTimesDefaultCreation.js'

const title = document.querySelector('.title');
const nextContent = document.querySelector('.nextContent');
const defaultCreationButton = document.getElementById('defaultCreationButton');
const customCreationButton = document.getElementById('customCreationButton');
const backButton = document.getElementById('backButton');

defaultCreationButton.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreationButton.style.display = 'none';
  customCreationButton.style.display = 'none';
  backButton.style.display = 'block';

  nextContent.innerHTML = `
    <div data-aos="zoom-out" class="form">
      <label for="quantityDefaultCreation">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
      <input type="number" id="quantityDefaultCreation" min="4" max="5" value="5">
      <br>    
      <label for="maxValueDefaultCreation">Digite o total de jogadores (entre 10 e 25):</label>
      <input type="number" id="maxValueDefaultCreation" min="10" max="25" value="25">

      <br>
      <br>
      
      <button id="createTimesDefaultCreationButton">Definir times</button>
    </div>

    <ul class="result" id="resultsDefaultCreation"></ul>
    <p class="info"></p>
  `;
  createTimesDefaultCreation();
});

customCreationButton.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreationButton.style.display = 'none';
  customCreationButton.style.display = 'none';
  backButton.style.display = 'block';

  nextContent.innerHTML = `
    <div data-aos="zoom-out" class="form">
      <label for="quantityCustomCreatiion">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
      <input type="number" id="quantityCustomCreatiion" min="4" max="5" value="5">
      <br>    
      <label for="maxValueCustomCreation">Digite o total de jogadores (entre 10 e 25):</label>
      <input type="number" id="maxValueCustomCreation" min="8" max="25" value="15">

      <br>
      <br>
      
      <button id="nextButton">Próximo</button>
    </div>

    <ul class="result" id="resultsDefaultCreation"></ul>
  `;

  nextContent.addEventListener('click', event => {
    const target = event.target;
  
    if (target.id === 'nextButton') {
      const maxValueCustomCreation = document.getElementById('maxValueCustomCreation').value;
      let inputsHTML = '';
  
      for (let i = 0; i < maxValueCustomCreation; i++) {
        inputsHTML += `
          <div>
            <input type="text" class="playerName" placeholder="Nome do jogador ${i + 1}">
            <input type="number" class="playerLevel" min="1" max="5" value="5" ${i + 1}">
          </div>
        `;
      }
  
      nextContent.innerHTML = `
        <div data-aos="zoom-out" class="form customCreation">
          <label>Insira os nomes e níveis dos jogadores:</label>
          <br>
          <div class="listInputPlayers">
            ${inputsHTML}
          </div>
          <br>
          <button id="createTimesCustomButton">Definir times</button>
        </div>
        <ul class="result" id="resultsCustomCreation"></ul>
      `;
    } else if (target.id === 'createTimesCustomButton') {
      createTimesCustomCreation();
    }
  });

});

backButton.addEventListener('click', () => {
  title.style.display = 'block';
  defaultCreationButton.style.display = 'block';
  customCreationButton.style.display = 'block';
  backButton.style.display = 'none';

  nextContent.innerHTML = '';
});