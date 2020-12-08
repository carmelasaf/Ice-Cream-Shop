function getBaking()  {
    newAmount = JSON.parse(localStorage.getItem("newAmount"));
    admin = localStorage.getItem("admin");
   
var idBuy = 100;
let name_buying = localStorage.getItem("name_buying");
let buying_amount = localStorage.getItem("buying_amount");
for(let i=0; i<bake.length; i++){
    if(bake[i].name === name_buying){
      idBuy = bake[i].id;
    }
}
console.log(idBuy);
if(idBuy !== 100){
  bake[idBuy-5].amount =  bake[idBuy-5].amount - buying_amount;
}
else console.log("non");

  if(admin === "admin"){
  
    for(let i=0; i<bake.length; i++){
      document.getElementsByClassName("amount_changing_baking")[i].style.display = "block";
      document.getElementsByClassName("amount_button_baking")[i].style.display = "block";
    }
  }
  if(newAmount !== null){
    bake[newAmount.id].amount = newAmount.amount;
  }
  
              massiveBaking = bake;
              let productsBaking = document.getElementsByClassName("baking");
              let prices = document.getElementsByClassName("price_item_baking");
              let amounts = document.getElementsByClassName("amount_item_baking");
              let manufacture = document.getElementsByClassName("manufacture_item_baking");
              let img = document.getElementsByClassName("img_item_baking");
              let names = document.getElementsByClassName("name_item_baking");
              let descriptions = document.getElementsByClassName("description_item_baking"); 
              let buttonsValue = document.getElementsByClassName("cart_button_baking");
                  for(let i=0; i<=productsBaking.length; i++){
                      names[i].innerHTML = massiveBaking[i].name;
                      img[i].src = massiveBaking[i].photo;
                      prices[i].innerHTML = massiveBaking[i].price + " שח";
                      manufacture[i].innerHTML = massiveBaking[i].manufacturer;
                      descriptions[i].innerHTML = massiveBaking[i].description;
                      buttonsValue[i].value = massiveBaking[i].id;
                      amounts[i].innerHTML = massiveBaking[i].amount;
                  }
  }

this.getBaking();
