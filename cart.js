var d = document,
    itemBox = d.querySelectorAll('.item_box'), 
		cartCont = d.getElementById('cart_content'); 
// פונקציה לטיפול באירועים במערכת
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// מחזיר את הנתונים שנמצאים ב LOCALSTORAGE מהעגלה
function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}

// שמירת נתונים של העגלה ל LOCALSTORAGE
function setCartData(o){
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}
// מוסיף מוצר לעגלה
function addToCart(e){
	this.disabled = true; // 
	var cartData = getCartData() || {}, // אנו מקבלים את נתוני הסל או יוצרים אובייקט חדש, אם יש יותר נתונים 
			parentBox = this.parentNode, // הוספה לעגלת קניות
			itemId = this.getAttribute('data-id'), // מזהה מוצר
			itemTitle = parentBox.querySelector('.item_title').innerHTML, // שם מוצר
			itemPrice = parentBox.querySelector('.item_price').innerHTML; // מחיר המוצר
	if (cartData.hasOwnProperty(itemId)) { // 	אם מוצר כזה כבר נמצא בסל, הוסף + 1 לכמות שלו
		cartData[itemId][2] += 1;
	} else { // אם המוצר עדיין לא נמצא בסל, הוסף לאובייקט
		cartData[itemId] = [itemTitle, itemPrice, 1];
	}
	// מעדכן נתונים ב LocalStorage
	if(!setCartData(cartData)){ 
		this.disabled = false; //  מבטל את נעילת הכפתור לאחר עדכון הדאטה
		cartCont.innerHTML = 'Product added to cart';
		setTimeout(function(){
			cartCont.innerHTML = 'Continue shopping ...';
		}, 1000);
	}
	return false;
}


//הוספה לעגלה

for (var i = 0; i < itemBox.length; i++){
	addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}

//פתח את הסל עם רשימת המוצרים שנוספו
function openCart(e){
	
	var cartData = getCartData(), // שלוף את כל נתוני הסל
		
			totalItems = '';
	console.log(JSON.stringify(cartData));
//אם יש פריט בסל אז מתחילים לייצר נתונים לפלט
	if(cartData !== null){
    localStorage.setItem("fullPrice", 0);
		totalItems = '<table class="shopping_list"><tr><th>Name</th><th>Price</th><th>Amount</th></tr>';
		for(var items in cartData){
      var totalPrice = 0;
      totalItems += '<tr>';
      var priceCutt = +cartData[items][1].slice(0,3);
      totalPrice = +localStorage.getItem("fullPrice");
      totalPrice = +totalPrice + (cartData[items][2] * priceCutt);
      localStorage.setItem("fullPrice", totalPrice);
			for(var i = 0; i < cartData[items].length; i++){
        totalItems += '<td>' + cartData[items][i] + '</td>';
			}
			totalItems += '</tr>';
    }
    let priceCart = document.getElementById("price_cart");
    priceCart.innerHTML = (localStorage.getItem("fullPrice")) + " שח";
    
		totalItems += '<table>';
    cartCont.innerHTML = totalItems;
	} else {
		// במידה והסל ריק
		cartCont.innerHTML = 'The cart is empty';
	}
	return false;
}
/*  פתיחת סל בלחיצת קליק */
addEvent(d.getElementById('checkout'), 'click', openCart);


/* מנקה סל */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
  localStorage.removeItem('cart');
  localStorage.removeItem("fullPrice")
	cartCont.innerHTML = 'Cart emptied.';	
});
