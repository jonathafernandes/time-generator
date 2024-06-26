import './public/style.css'
import createTimes from './src/app.js'

const title = document.querySelector('.title');
const defaultCreation = document.getElementById('defaultCreation');
const customCreation = document.getElementById('customCreation');
const content = document.querySelector('.content');
const backButton = document.getElementById('backButton');

defaultCreation.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreation.style.display = 'none';
  customCreation.style.display = 'none';
  backButton.style.display = 'block';

  content.innerHTML = `
    <div data-aos="zoom-out" class="form">
      <label for="quantity">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
      <input type="number" id="quantity" min="4" max="5" value="5">
      <br>    
      <label for="maxValue">Digite o total de jogadores (entre 8 e 25):</label>
      <input type="number" id="maxValue" min="8" max="25" value="25">

      <br>
      <br>
      
      <button id="createTimesButton">Definir times</button>
    </div>

    <ul id="results"></ul>
  `;
  createTimes();
});

customCreation.addEventListener('click', () => {
  title.style.display = 'none';
  defaultCreation.style.display = 'none';
  customCreation.style.display = 'none';
  backButton.style.display = 'block';

  content.innerHTML = `<h2 data-aos="zoom-out">Em breve...</h2>`;
  createTimes();
});

backButton.addEventListener('click', () => {
  title.style.display = 'block';
  defaultCreation.style.display = 'block';
  customCreation.style.display = 'block';
  backButton.style.display = 'none';

  content.innerHTML = '';
});

