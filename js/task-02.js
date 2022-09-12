const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navElement = document.querySelector('#ingredients');

const categoryList = ingredients.map(el => {
  let elementLi = document.createElement('li');
  elementLi.classList.add('item');
  elementLi.textContent = el;
  return elementLi;
});

navElement.append(...categoryList);
