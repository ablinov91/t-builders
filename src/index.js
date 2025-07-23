import { domUtils } from './modules/dom.js';
import { mathUtils } from './modules/math.js';
import './styles/main.css';

class App {
  constructor() {
    this.init();
  }

  init() {
    console.log('🚀 Приложение запущено!');
    this.setupEventListeners();
    domUtils.updateResult('<p>Добро пожаловать! Введите числа и нажмите "Вычислить"</p>');
  }

  setupEventListeners() {
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
      calculateBtn.addEventListener('click', () => this.handleCalculation());
    }

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => domUtils.toggleTheme());
    }
  }

  handleCalculation() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
    
    const sum = mathUtils.add(num1, num2);
    const product = mathUtils.multiply(num1, num2);
    
    domUtils.updateResult(`
      <p>Сумма: ${sum}</p>
      <p>Произведение: ${product}</p>
    `);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
