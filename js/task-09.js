function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const spanTextRef = document.querySelector('.color');
const btnChangeColor = document.querySelector('button.change-color');

btnChangeColor.addEventListener('click', BtnChangeColorClick);

function BtnChangeColorClick() {
  const randomColor = getRandomHexColor();

  bodyRef.style.backgroundColor = randomColor;
  spanTextRef.textContent = randomColor;
}

/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике 
на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

*/
