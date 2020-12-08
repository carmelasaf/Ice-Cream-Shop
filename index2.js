function addNewProduct() {
   new_name = document.getElementById("name_new").value;
   new_price = document.getElementById("price_new").value;
   new_amount = document.getElementById("amount_new").value;
   new_description = document.getElementById("description_new").value;
   new_category = document.getElementById("category_new").value;
   new_manufacturer = document.getElementById("manufacturer_new").value;

   let  objectNew =  
       {
           "name": new_name,
           "price": new_price,
           "amount": new_amount,
           "description": new_description,
           "category": new_category,
           "manufacturer": new_manufacturer,
       }
   

   localStorage.setItem("newProduct", JSON.stringify(objectNew));
} 
// הוספה של מוצר חדש לרישום שלו ב LOCAL STORAGE


