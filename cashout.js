const clotheList = JSON.parse(localStorage.getItem('clothes'));
const listContainer = document.getElementById("list-container");

function completeList() {
  let linkHTML = listContainer.innerHTML;
  let listHTML = '';
  let totalCost = 0;
  clotheList.forEach(clotheInfo => {
    let cost = clotheInfo[1];
    let clothe = clotheInfo[0];
    totalCost += Number(cost);
    listHTML =`
      ${listHTML}
      <div class="product">
        <p class="product-name">${clothe}</p>
        <p class="product-cost">${cost} Bs</p>
      </div>
    `;
  });
  listContainer.innerHTML=`
    ${listHTML}
    <div class="total">
      <p>TOTAL</p>
      <p id="total-price">${totalCost} Bs</p>
    </div>
    ${linkHTML}
    `;
}

completeList();