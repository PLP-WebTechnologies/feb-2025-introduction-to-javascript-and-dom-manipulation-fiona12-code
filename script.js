function submitDestination(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  let destinationElement = document.querySelector("#destination").value;
  let submitElement = document.querySelector("#submit-input").value;
  let h1 = document.querySelector("#heading");

  h1.innerHTML = `Hope you enjoy visiting ${destinationElement}!`;
  h1.style.color = "#222831";
}

let form = document.querySelector("#form-container");
form.addEventListener("submit", submitDestination);

function addElement() {
  const container = document.getElementById("addition");
  // Only add if it doesn't already exist
  if (!document.getElementById("dynamicPara")) {
    const para = document.createElement("p");
    para.id = "dynamicPara";
    para.textContent = "Nakuru is a beautiful town.";
    container.appendChild(para);
  }
}

function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);
