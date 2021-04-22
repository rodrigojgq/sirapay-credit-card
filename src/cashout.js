const card = document.querySelector('#card'),
      btnForm = document.querySelector('#form-button'),
      form = document.querySelector('#card-form');

card.addEventListener('click', () => {
  card.classList.toggle('active');
})

btnForm.addEventListener('click', () => {
  btnForm.classList.toggle('active');
  form.classList.toggle('active');
})