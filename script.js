"Use strict";
const bill = document.querySelector(".two");
const tip = document.querySelector(".btn");
const tipValue = document.querySelector(".tip");
const more = document.querySelector(".more");
const info = document.querySelector(".info");
const closeInfo = document.querySelector(".nine");
tipValue.textContent = "";

tip.addEventListener("click", function () {
  if (bill.value >= 1000 && bill.value <= 50000) {
    tipValue.textContent = bill.value * 0.1;
  } else {
    tipValue.textContent = bill.value * 0.05;
  }
});

more.addEventListener("click", function () {
  info.classList.remove("hidden");
});

closeInfo.addEventListener("click", function () {
  info.classList.add("hidden");
});
