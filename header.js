const headerAdmin = document.getElementById("login_admin");
if (localStorage.getItem("admin") == "admin"){
  headerAdmin.innerHTML = "Hello, admin";
  headerAdmin.href = "index3.html";
}
else {
  headerAdmin.innerHTML = "Login admin";
  headerAdmin.href = "index2.html";
}

// אם הוא הכניס שם משתמש וסיסמה של ADMIN הוא נכנס ישירות לאקאונט או לכניסה