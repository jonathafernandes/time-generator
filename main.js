import './public/style.css'
import createTimes from './src/app.js'

document.querySelector('.container').innerHTML = `
  <div class="form">
    <label for="quantity">Digite a quantidade de jogadores em cada time (entre 4 e 5):</label>
    <input type="number" id="quantity" min="4" max="5" value="5">
    <br>    
    <label for="maxValue">Digite o total de jogadores (entre 10 e 25):</label>
    <input type="number" id="maxValue" min="10" max="25" value="25">

    <br>
    <br>
    <br>
    
    <button id="button">Definir times</button>
  </div>

  <ul id="results"></ul>
`

createTimes();
