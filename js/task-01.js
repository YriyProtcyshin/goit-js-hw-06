const navItemRef = document.querySelectorAll('li.item');

console.log(`Number of categories: ${navItemRef.length}`);

navItemRef.forEach(liItemRef => {
  const title = liItemRef.querySelector('h2').textContent;
  const countItem = liItemRef.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${countItem}`);
});
