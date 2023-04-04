function calculateCarbon() {
  let transportation = Number(document.getElementById("transportation").value);
  let food = Number(document.getElementById("food").value);
  let electricity = Number(document.getElementById("electricity").value);
  let other = Number(document.getElementById("other").value);

  let total = transportation + food + electricity + other;
  let carbon = total * 0.5;

  document.getElementById(
    "result"
  ).innerHTML = `Your carbon footprint is ${carbon} kg CO2e per year.`;
}

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const date = document.querySelector("date");

const currentYear = new Date().getFullYear();

document.addEventListener("load", () => {
  date.innerHTML = `&copy; ${currentYear} Aniket`;
});
