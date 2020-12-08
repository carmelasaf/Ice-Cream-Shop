function setAmount(i) {//הגדרת כמות
    var amountChanging = document.getElementsByClassName("amount_changing")[i].value;
    if(amountChanging === ""){
     amountChanging = document.getElementsByClassName("amount_changing_baking")[i].value;
    }//בודק אם הכמות ריקה ואם כן אז לוקח את הערך שנכתב
    const newAmount = {
        amount: amountChanging,//אובייקט חדש
        id: i
    }
    console.log(newAmount);//שיטה להוציא מהJSON מידע
    localStorage.setItem("newAmount",JSON.stringify(newAmount));
    window.location.reload();            // שינוי כמות ב ADMIN LOCAL STORAGE רפרש
}//REFRASH