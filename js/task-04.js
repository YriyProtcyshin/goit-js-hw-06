/*

Задание 4
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.

*/

const ref = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

ref.decrementBtn.addEventListener('click', decrementValue);
ref.incrementBtn.addEventListener('click', incremmentValue);

function decrementValue() {
  counterValue = Number.parseInt(ref.value.textContent);
  ref.value.textContent = counterValue - 1;
}

function incremmentValue() {
  counterValue = Number.parseInt(ref.value.textContent);
  ref.value.textContent = counterValue + 1;
}
