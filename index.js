const submitButton = document.querySelector("#submit-button");
let clothesList = [];
let oneChecked = true;

submitButton.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('input[name="clothe"]:checked');
  if(checkboxes.length > 0){
    checkboxes.forEach(checkbox => {
      let clotheInfo = [];
      clotheInfo.push(checkbox.value);
      clotheInfo.push(document.querySelector(`#${checkbox.value}-cost`).innerHTML);
      clotheInfo.push(checkbox.getAttribute('id'));
      clothesList.push(clotheInfo);
    });
    localStorage.setItem('clothes', JSON.stringify(clothesList))
    oneChecked = false;
  }
});

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  if(oneChecked){
    event.preventDefault();
    alert("Debe seleccionar al menos una opción");
  }
});

function checkClothes() {
  if (localStorage.getItem('clothes') !== null) {
    const clotheList = JSON.parse(localStorage.getItem('clothes'));
    clotheList.forEach(clotheInfo => {
      let checkbox = clotheInfo[2];
      document.getElementById(checkbox).checked = true;
    });
    localStorage.clear()
  }
}

checkClothes();