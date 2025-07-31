"use strict";

const slider = document.querySelector("#size-slider");
const sizeText = document.querySelector("#size-text");
const grid = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const randomButton = document.querySelector("#random-button");

const defaultGridSize = 16;
let gridSize = defaultGridSize;
let gridArea = gridSize * gridSize;

const setSpaceSize = () => {
    let spaceSizePercentage = 100 / gridSize;
    
    document.documentElement.style.setProperty('--space-basis-percentage',
        `${spaceSizePercentage}%`);
};

const createGrid = () => {
    setSpaceSize();
    for (let i = 0; i < gridArea; i++) {
        const space = document.createElement("div");
        space.setAttribute("class", "space")
        grid.appendChild(space);
    }
};

const changeSize = () => {
    slider.addEventListener("change", () => {
        sizeText.textContent = `GRID ${slider.value} x ${slider.value}`; 
        
        for (let i = 0; i < gridArea; i++) {
            grid.firstChild.remove();
        }

        gridSize = slider.value;
        gridArea = gridSize * gridSize;
        createGrid();

        setColorMode();
        resetGridButton();
    });
};

const paintSpaceBlack = () => {
    const spaces = document.querySelectorAll("div.space");

    spaces.forEach(space => space.addEventListener("mouseover", () => {
        space.setAttribute("style", "background: black;");
    }));
};

const paintSpaceRandomColor = () => {
    const spaces = document.querySelectorAll("div.space");

    spaces.forEach(space => space.addEventListener("mouseover", () => {
        space.setAttribute("style", `background: ${getRandomColor()};`);
    }));
};

const getRandomColor = () => {
    const red = Math.floor(Math.random() * 200);
    const green = Math.floor(Math.random() * 200);
    const blue = Math.floor(Math.random() * 200);

    return `rgb(${red}, ${green}, ${blue})`;
};

const toggleRandomButton = () => {
    let value = 0;
    randomButton.addEventListener("click", () => {
        value = value + 1;
        if (value % 2 === 0) {
            randomButton.textContent = "RANDOM COLOR: OFF";
        } else {
            randomButton.textContent = "RANDOM COLOR: ON";
        }
        setColorMode();
    })
}

const setColorMode = () => {
    if (randomButton.textContent === "RANDOM COLOR: OFF") {
        paintSpaceBlack();
    }
    if (randomButton.textContent === "RANDOM COLOR: ON") {
        paintSpaceRandomColor();
    }
};

const   resetGridButton = () => {
    const spaces = document.querySelectorAll("div.space");

    resetButton.addEventListener("click", () => {
        spaces.forEach(
            space => space.setAttribute("style", "background: #a1a1a1;")
        )
    });
}

createGrid();
changeSize();
setColorMode();
getRandomColor();
toggleRandomButton();
resetGridButton();