const loginBtn = document.getElementById("login-btn");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("dialog button");

loginBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
  
});
