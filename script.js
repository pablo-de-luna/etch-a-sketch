"use strict";

const slider = document.querySelector("#size-slider");
const sizeText = document.querySelector("#size-text");
const grid = document.querySelector("#grid-container");

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
        paintSpaceBlack();
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

const toggle = "on";

const changeColorMode = () => {
    if (toggle === "off") {
        paintSpaceBlack();
    } else {
        paintSpaceRandomColor();
    }
};

getRandomColor()
createGrid();
changeSize();
changeColorMode();