let canvas = document.querySelector('#container');

function makeCanvas(size) {
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  canvas.dataset.size = size;
  document.querySelector('#show-size').textContent = `${size} x ${size}`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', changeColor);
    cell.addEventListener('mousedown', changeColor);
    canvas.appendChild(cell);
  }
}

function clearCanvas() {
  canvas.innerHTML = '';
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  e.target.style.backgroundColor = "black";
}

let sidebar = document.querySelector("#sidebar");

let button = document.querySelector("#canvas-size");
button.addEventListener('click', () => {
  let newSize = prompt("Enter a new grid size");
  clearCanvas();
  makeCanvas(newSize);
});

let clearButton = document.querySelector("#clear-canvas");
clearButton.addEventListener('click', () => {
  clearCanvas();
  makeCanvas(parseInt(canvas.dataset.size));
});


window.onload = makeCanvas(16);
