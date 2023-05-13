let container = document.querySelector(".container");
let selectedNumbers = document.querySelector(".selected-numbers");
let selectedNumbersArray = [];

makeColumns();


function makeColumns() {
  let columns = ``;
  for (let i = 0; i < 10; i++) {
    columns += `<div class="column">${fillColumns()}</div>`;
  }
  container.innerHTML = columns;
  let column = document.querySelectorAll(".column");
  column.forEach((el) => el.addEventListener("click", reduceColumn));
}


function fillColumns() {
  let box = ``;
  for (let i = 0; i < 10; i++) {
    let rand = randomNumber();
    box += `<div class="box" data-id=${rand}>${rand}</div>`;
  }
  return box;
}


function randomNumber() {
  let random = Math.ceil(Math.random() * 6);
  return random;
}


