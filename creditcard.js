import validator from './validator.js';
const card = document.querySelector('#card'),
      btnForm = document.querySelector('#form-button'),
      form = document.querySelector('#card-form'),
      cardNumber = document.querySelector('#card .card-number'),
      cardName = document.querySelector('#card .card-name'),
      logoBrand = document.querySelector('#logo-brand'),
      firm = document.querySelector('#card .firm'),
      monthExpiration = document.querySelector('#card #month'),
      yearExpiration = document.querySelector('#card #year'),
      ccv = document.querySelector('#card .ccv'),
      logoValid = document.querySelector('#validlogo');

const showFrontFace = () => {
  if(card.classList.contains('active')){
    card.classList.remove('active');
  }
};
const validLogo = (cleanNumber) => {
  let valid;
  if(cleanNumber === 0 || cleanNumber === ""){
    cleanNumber = 1;
  }
  valid = validator.isValid(cleanNumber);
  if(valid){
    logoValid.style.display = "inline";
    logoValid.classList.add('valid');
    logoValid.classList.remove('invalid');
  }else{
    logoValid.style.display = "inline";
    logoValid.classList.add('invalid');
    logoValid.classList.remove('valid');
  }
};
// Rotación de la Tarjeta
card.addEventListener('click', () => {
  card.classList.toggle('active');
});

//
btnForm.addEventListener('click', () => {
  btnForm.classList.toggle('active');
  form.classList.toggle('active');
});

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
  let cleanNumber;
  let maskNumber;
  valueInput = valueInput
  .replace(/\s/g, '')
  .replace(/\D/g, '')
  .replace(/([0-9]{4})/g, '$1 ')
  .trim();
  form.inputNumber.value = valueInput
  cleanNumber = valueInput.replace(/\s/g, '');
  maskNumber = validator.maskify(cleanNumber).replace(/(#{4})/g, '$1 ');
  cardNumber.textContent = maskNumber
  if(valueInput == ''){
    cardNumber.textContent = "#### #### #### ####";
    logoBrand.innerHTML = '';
    logoValid.style.display = "none";
  }else{
    validLogo(cleanNumber);
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
  }else{
    logoBrand.innerHTML = '';
  }
  showFrontFace();
});
// Input nombre de tarjeta
form.inputName.addEventListener('keyup', (e) => {
  let valueInput = e.target.value;
  form.inputName.value = valueInput.replace(/[0-9]/g, '');
  cardName.textContent = valueInput;
  if(valueInput == ''){
    cardName.textContent = "Jhon Doe";
    firm.querySelector('p').innerHTML =' ';
  }else{
    firm.querySelector('p').innerHTML = valueInput;
  }
  showFrontFace();
});
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
});