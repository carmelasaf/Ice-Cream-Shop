function submitLogin () {
    const adminLogin = document.getElementById("login");
    const adminPassword = document.getElementById("password");
  
    if (adminLogin.value == "admin" && adminPassword.value == "admin"){
      alert("Welcome Admin!");
      window.open("index.html");
        localStorage.setItem("admin", "admin");//שמירהה
      window.close("index2.html");
    }
    else alert("Wrong Details")
  }  // כניסה לדף ADMIN