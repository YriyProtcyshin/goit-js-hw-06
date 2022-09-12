/*
Задание 8
Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
где имя поля будет именем свойства, а значение поля - значением свойства.
 Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

*/

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const currentElement = event.currentTarget.elements;
  if (!currentElement.email.value || !currentElement.password.value) {
    alert('Все поля должны быть заполнены!!!');
    return;
  }

  const dataFromForm = {
    email: currentElement.email.value,
    password: currentElement.password.value,
  };

  console.log(dataFromForm);
  formRef.reset();
}
