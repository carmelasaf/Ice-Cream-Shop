  function payment () {
    let cart = localStorage.getItem("cart");
    if (cart != null) {
        let currentCart = JSON.parse(localStorage.getItem("cart"));
        for(let items in currentCart){
            var newName = [];
            newName.push(currentCart[items][0]);
            localStorage.setItem("name_buying",newName);
            localStorage.setItem("buying_amount", currentCart[items][2]);
        }
        localStorage.setItem("purchase", currentCart);
        localStorage.removeItem("cart");
        window.location.reload();
    }
}

function getData() {
myNewProduct = localStorage.getItem("newProduct");
newAmount = JSON.parse(localStorage.getItem("newAmount"));
admin = localStorage.getItem("admin");

var idBuying = 100;
let name_buying = localStorage.getItem("name_buying");
let buying_amount = localStorage.getItem("buying_amount");
for(let i=0; i<icecream.length; i++){
    if(icecream[i].name === name_buying){
        idBuying = icecream[i].id;
    }
}
if(idBuying !== 100){
    console.log(idBuying);
    icecream[idBuying].amount =  icecream[idBuying].amount - buying_amount;
}

if(myNewProduct !== null){
  document.getElementById("added").style.display = "flex";
  icecream.push(JSON.parse(myNewProduct));
}

if(admin === "admin"){

  for(let i=0; i<icecream.length; i++){
    document.getElementsByClassName("amount_changing")[i].style.display = "block";
    document.getElementsByClassName("amount_button")[i].style.display = "block";
  }
    }

if(newAmount !== null){
  icecream[newAmount.id].amount = newAmount.amount;
}
            massiveIcecream = icecream;
            console.log(massiveIcecream);
            let products = document.getElementsByClassName("icecream");
            let prices = document.getElementsByClassName("price_item");
            console.log(products)
            let amounts = document.getElementsByClassName("amount_item");
            let manufacture = document.getElementsByClassName("manufacture_item");
            let img = document.getElementsByClassName("img_item");
            let names = document.getElementsByClassName("name_item");
            let descriptions = document.getElementsByClassName("description_item"); 
            let buttonsValue = document.getElementsByClassName("cart_button");
                for(let i=0; i<=products.length; i++){
                    names[i].innerHTML = massiveIcecream[i].name;
                    img[i].src = massiveIcecream[i].photo;
                    prices[i].innerHTML = massiveIcecream[i].price + " שח";
                    manufacture[i].innerHTML = massiveIcecream[i].manufacturer;
                    descriptions[i].innerHTML = massiveIcecream[i].description;
                    buttonsValue[i].value = massiveIcecream[i].id;
                    amounts[i].innerHTML = massiveIcecream[i].amount;
                }
}
this.getData();

