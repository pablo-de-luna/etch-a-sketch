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

createGrid();
changeSize();
paintSpaceBlack();
