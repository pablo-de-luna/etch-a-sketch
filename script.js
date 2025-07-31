"use strict";

const slider = document.querySelector("#size-slider");
const sizeText = document.querySelector("#size-text");
const grid = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const opacityButton = document.querySelector("#opacity-button");
const randomButton = document.querySelector("#random-button");

const defaultGridSize = 16;
let gridSize = defaultGridSize;
let gridArea = gridSize * gridSize;

const setSpaceSize = () => {
    let spaceSizePercentage = 100 / gridSize;
    
    document.documentElement.style.cssText =
        `--space-basis-percentage: ${spaceSizePercentage}%;`
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
        for (let i = 0; i < gridArea; i++) {
            grid.firstChild.remove();
        }
        sizeText.textContent = `GRID ${slider.value} x ${slider.value}`; 
        gridSize = slider.value;
        gridArea = gridSize * gridSize;
        createGrid();
        setColorMode();
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
            randomButton.textContent = "RANDOM: OFF";
        } else {
            randomButton.textContent = "RANDOM: ON";
        }
        setColorMode();
    })
}

const setColorMode = () => {
    if (randomButton.textContent === "RANDOM: OFF") {
        paintSpaceBlack();
    }
    if (randomButton.textContent === "RANDOM: ON") {
        paintSpaceRandomColor();
    }
};

getRandomColor()
createGrid();
changeSize();
toggleRandomButton();
setColorMode();