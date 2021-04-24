const validator = {
  isValid(cardNumber) {
    let valid = true;
    let numbers = Number(cardNumber);
    let i = 1;
    let sum = 0;
    if(cardNumber == "number" || cardNumber === 0){
      return false;
    }
    while(numbers > 0) {
      let aux = numbers % 10;
      if(i % 2 === 0) {
        aux = aux * 2;
        if(aux >= 10){
          aux = (aux % 10) + Math.trunc(aux / 10);
        }
      }
      sum = sum + aux;
      i++;
      numbers = Math.trunc(numbers / 10);
    }
    valid = (sum % 10 == 0);
    return valid;
  },
  maskify(cardNumber) {
    let maskifiedNumber;
    let numberLength = cardNumber.length;
    maskifiedNumber = cardNumber;
    if(numberLength > 4){
      let aux = cardNumber.substring(numberLength-4)
      maskifiedNumber = aux.padStart(numberLength, "#");
    }
    return maskifiedNumber;
  }
};

validator.maskify("helloworld");
export default validator;
