let boxHolder = document.querySelector('.box-holder');
let selectedNumbers = document.querySelector('.selected-numbers');




function fillGrid(){
    let html = ``;


    for( let i =0; i < 100; i++){
     let rand = Math.floor(Math.random()*6)+1;
    html += `
    <div class="cube">${rand}</div>
    `.trim();

    boxHolder.innerHTML = html;
    let cubes = document.querySelectorAll('.cube');

  lastTenCube(cubes);
  

    }
}

fillGrid();

// DOM 




function lastTenCube(cubes){
    
    cubes.forEach((cube, index) => {
        if(index > 89){
            cube.classList.remove('cube');
            cube.classList.add('available-cube');

            // izmena
            cube.addEventListener('click', selectCube);
        }
        
        
        cube.setAttribute('data-index', index);
        

    })
}

// function selectCube(){

//     // izmena
//   let selectedCube = this;


//   console.log(selectedCube);

// selectedNumbers.appendChild(selectedCube)



// }





let selectedCubes = [];

function selectCube() {
  let selectedCube = this;
  selectedNumbers.appendChild(selectedCube);

  selectedCubes.push(selectedCube);

  

  if (selectedCubes.length === 3) {
    deleteCubesFromDiv(selectedCubes);
    selectedCubes = [];
  }
}



function deleteCubesFromDiv(selectedCubes) {

  selectedCubes.forEach((cube)  => {
    selectedNumbers.removeChild(cube);

  });
}







