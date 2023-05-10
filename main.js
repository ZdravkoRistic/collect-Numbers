let boxHolder = document.querySelector(".box-holder");
let selectedNumbers = document.querySelector(".selected-numbers");

function fillGrid() {
  let html = "";

  for (i = 0; i < 100; i++) {
    let rand = Math.floor(Math.random() * 6) + 1;
    html += `
    <div class="cube" data-index="${i}">${rand}</div>
    `.trim();
  }
  boxHolder.innerHTML = html;
}

fillGrid();

let cubes = document.querySelectorAll(".cube");

lastTenCubes(cubes);

function lastTenCubes(cubes) {
  cubes.forEach((cube, index) => {
    if (index >= 90) {
      cube.classList.remove("cube");
      cube.classList.add("available-cube");
      cube.addEventListener("click", selectedCube);
    }
  });
}

function selectedCube() {
  let html = "";
  let selected = this.innerHTML;
  this.style.visibility = "hidden";
  for (let i = 0; i < 10; i++) {
    html = `<div class="available-cube">${selected}</div>`;
  }
  selectedNumbers.innerHTML += html;

 
  nextAvailable(this);
  
 
}

function nextAvailable(current) {
    let selectedIndex = current.getAttribute("data-index");
    let nextAvailable = cubes[selectedIndex - 10];
    nextAvailable.classList.remove("cube");
    nextAvailable.classList.add("available-cube");
    nextAvailable.addEventListener("click", selectedCube);
  }
  



  
  
  
  
  
  
  


















