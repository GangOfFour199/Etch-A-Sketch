//script.js


// Create default variables which allows page to reset to defined properties

const DEFAULT_COLOUR = 'black'
const DEFAULT_MODE = 'colour'
const DEFAULT_SIZE = 16

let currentColour = DEFAULT_COLOUR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColour(newColour) {
  currentColour = newColour
}

function setCurrentMode(newMode) {
  activateButton(newMode)
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

const colorPicker = document.getElementById('colorPicker')
const colourBtn = document.getElementById('colourBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const clearBtn = document.getElementById('clearBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')
const container = document.getElementById('container')

colorPicker.oninput = (e) => setCurrentColour(e.target.value)
colourBtn.onclick = () => setCurrentMode('colour')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
clearBtn.onclick = () => restartGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value) // as slider moves, value updates
sizeSlider.onchange = (e) => changeSize(e.target.value) 

let mouseClicked = false
document.body.onmousedown = () => (mouseClicked = true) // mousedown - when mouse is clicked
document.body.onmouseup = () => (mouseClicked = false) //  mouseup - when mouse is not clicked

function changeSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  restartGrid()
}

// .innerHTML operator changes value inside a tag

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

// create new func to reload the grid with a new size after clearing.

function restartGrid() {
  clearGrid()
  createGrid(currentSize)
}

function clearGrid() {
  container.innerHTML = '' // clears events and colour in grid
}

/* Create grid. Set template in function with rows + cols
   Use for loop to add element, events and append to parent node
   Colour of grid item changes as mouse hovers oevr with event 
*/

function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size * size; i++) {
    const sketchGrid = document.createElement('div')
    sketchGrid.classList.add('grid-item')
    sketchGrid.addEventListener('mouseover', changeColour) // colour changes when mouse clicked & hovering over
    sketchGrid.addEventListener('mousedown', changeColour)
    container.appendChild(sketchGrid)
  }
}

function changeColour(e) {
  // when mouse is clicked, colour trail will occur & NOT when mouse isn't clicked
  if (e.type === 'mouseover' && !mouseClicked) return
  if (currentMode === 'rainbow') 
    // randomised colour generator 
  {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
  } 
    else if (currentMode === 'colour') {
    e.target.style.backgroundColor = currentColour
  }
  }


// activateButton() allows to switch between modes and activates/deactivates accordingly.

function activateButton(newMode) {
  if (currentMode === 'rainbow') {
    rainbowBtn.classList.remove('active')
  } else if (currentMode === 'colour') {
    colourBtn.classList.remove('active')
  } else if (currentMode === 'clear') {
    clearBtn.classList.remove('active')
  }

  if (newMode === 'rainbow') {
    rainbowBtn.classList.add('active')
  } else if (newMode === 'colour') {
    colourBtn.classList.add('active')
  } else if (newMode === 'clear') {
    clearBtn.classList.add('active')
  }
}

// fucntion below changes button colour as you select from colorpicker

function changeBtnColour(el) {
  colourBtn.style.backgroundColor = el.value;
}

// note - document.onload() caused issue with creation of grid once loaded. 
// window.onload works better as DOM tree fully ready before all script has been loaded and intitiated.

window.onload = () => {
  createGrid(DEFAULT_SIZE)
  activateButton(DEFAULT_MODE)
}


