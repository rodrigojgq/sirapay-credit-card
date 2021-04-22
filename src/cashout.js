const card = document.querySelector('#card'),
      btnForm = document.querySelector('#form-button'),
      form = document.querySelector('#card-form'),
      cardNumber = document.querySelector('#card .card-number'),
      cardName = document.querySelector('#card .card-name'),
      logoBrand = document.querySelector('#logo-brand'),
      firm = document.querySelector('#card .firm'),
      monthExpiration = document.querySelector('#card #month'),
      yearExpiration = document.querySelector('#card #year'),
      ccv = document.querySelector('#card .ccv');


const showFrontFace = () => {
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
}
// Rotación de la Tarjeta
card.addEventListener('click', () => {
  card.classList.toggle('active');
})

//
btnForm.addEventListener('click', () => {
  btnForm.classList.toggle('active');
  form.classList.toggle('active');
})

// Select del mes generado dinamicamente
for(let i = 1; i <= 12; i++){
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  form.selectMonth.appendChild(option);
}

// Select del year generado dinamicamente
const actualYear = new Date().getFullYear();
for(let i = actualYear; i <= actualYear + 8; i++){
  let option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  form.selectYear.appendChild(option);
}
// Input numero de tarjeta
form.inputNumber.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;
  cardNumber.textContent = valueInput;
  if(valueInput == ''){
    cardNumber.textContent = "#### #### #### ####";
    logoBrand.innerHTML = '';
  }
  if(valueInput[0] == 4){
    logoBrand.innerHTML = '';
    const image = document.createElement('img');
    image.src = './assets/img/visa.png'
    logoBrand.appendChild(image);
  }else if(valueInput[0] == 5){
    logoBrand.innerHTML = '';
    const image = document.createElement('img');
    image.src = './assets/img/mastercard.png'
    logoBrand.appendChild(image);
  }
  showFrontFace();
});
// Input nombre de tarjeta
form.inputName.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;
  form.inputNumber.value = valueInput.replace(/[0-9]/g, '');
  cardName.textContent = valueInput;
  firm.querySelector('p').textContent = valueInput
  if(valueInput == ''){
    cardName.textContent = "Jhon Doe";
    firm.textContent = '';
  }
  showFrontFace();
})
// Select mes
form.selectMonth.addEventListener('change', (e) => {
  monthExpiration.textContent = e.target.value;
  showFrontFace();
});
// Select Year
form.selectYear.addEventListener('change', (e) => {
  yearExpiration.textContent = e.target.value.slice(2);
  showFrontFace();
});
// CCV
form.inputCCV.addEventListener('keyup', () => {
  if(!card.classList.contains('active')){
    card.classList.toggle('active');
  }
  ccv.textContent = form.inputCCV.value;
})