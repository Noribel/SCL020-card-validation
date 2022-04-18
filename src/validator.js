const validator ={
  
  isValid: function validar (cardNumber) {
   let arrayNumeros = new Array ();
   let x = 0;
   let total= 0;
   let sumatoria = 0;
   
   for (let i = cardNumber.length -1; i >= 0; i--){
    arrayNumeros[x] = cardNumber[i];
    x=x+1;
    
   }
   
   for (let i = 1; i < arrayNumeros.length; i = i + 2) {
    arrayNumeros[i] = arrayNumeros[i]*2;
    if( arrayNumeros[i] > 9 ){
      let newNumber;
      let position = 0;
      newNumber = String(arrayNumeros[i]);
      arrayNumeros[i] = parseInt(newNumber[position]) + parseInt(newNumber[position + 1]);
      
    }
    
   }
   
   for( let i = 0; i < arrayNumeros.length; i = i + 1){
   sumatoria = sumatoria + parseInt(arrayNumeros[i]);
   
   }
   
   total = sumatoria%10;
  
   if(total === 0){
  
   return true;
   }
   else{
  
    return false;
  }
 },

 maskify: function marcar(cardNumber) { 

  
  for (let i = cardNumber.length ; i >= 0; i+ 1){
    let cardnumberinicial = 0 ;
    let cardNumberfinal = 0;
   
    cardNumberfinal=  cardNumber.slice(-4);
    cardnumberinicial = cardNumber.slice(0, -4);
    cardnumberinicial = cardnumberinicial.replace(/1/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/2/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/3/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/4/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/5/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/6/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/7/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/8/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/9/gi, "#");
    cardnumberinicial = cardnumberinicial.replace(/0/gi, "#");
   
    cardNumber= cardnumberinicial.concat(cardNumberfinal);
    return cardNumber;
 
 }
}}

export default validator;
