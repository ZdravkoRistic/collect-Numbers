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


function reduceColumn(e) {
  if (e.target == this.lastElementChild) {
    this.removeChild(this.lastElementChild);
    selectedNumbers.appendChild(e.target);
    selectedNumbersArray.push(e.target);

    let num = selectedNumbers.children;

    for (let i = 0; i < num.length; i++) {
      num[i].classList.add("selected");
    }
    let arrayForDelete = document.querySelectorAll(
      `.selected[data-id="${e.target.innerHTML}"]`
    );
    console.log(arrayForDelete);

    if (arrayForDelete.length === 3) {
      for (let i = 0; i < arrayForDelete.length; i++) {
        arrayForDelete[i].style.background = "#333";
        setTimeout(() => {
          selectedNumbers.removeChild(arrayForDelete[i]);
        }, 1000);
      }
    }
  }
}
