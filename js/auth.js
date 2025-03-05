
window.onload = function () {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    updateNavbarForLoggedInUser(user.name);
  }
};
// user register
function handlereg() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regemail").value;
  const password = document.getElementById("regpassword").value;

  if (!name || !email || !password) {
    alert("All Fields Are Required...");
    return;
  }
  const user = { name, email, password };
  localStorage.setItem(email, JSON.stringify(user));
  alert("Registered successfully!. you can login now");

  window.location.href = "login.html";
}
//user login
function handlelogin() {
  const email = document.getElementById("logemail").value;
  const password = document.getElementById("logpassword").value;
  const user = JSON.parse(localStorage.getItem(email));
  if (user && user.password === password) {
    alert("login successfully");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    updateNavbarForLoggedInUser(user.name); 
  
  } else {
    // Login failed
    alert("Invalid email or password");
  }
}
// update navbar
function updateNavbarForLoggedInUser(name) {
  const authButtons = document.getElementById("authButtons");
  if (authButtons)
    authButtons.innerHTML = `
       <button class="btn btn-primary" >${name}</button> 
         <button class="btn btn-primary" onclick="logout()" >Logout</button>
       `;
}

// logout
function logout(){
  localStorage.removeItem('loggedInUser')
  alert('logOut successfully')
  window.location.href='login.html'
}
