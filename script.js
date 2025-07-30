"use strict";

const restartButton = document.querySelector("#restart-button");
const grid = document.querySelector("#grid-container");

let gridSize = 10;
let gridArea = gridSize * gridSize;

const setSpaceSize = () => {
    let spaceSize = 100 / gridSize;
    document.documentElement.style.cssText =
        `--space-basis-percentage: ${spaceSize}%;`
};

const createGrid = () => {
    setSpaceSize();
    for (let i = 0; i < gridArea; i++) {
        const space = document.createElement("div");
        space.setAttribute("class", "space")
        grid.appendChild(space);
    }
};
createGrid();

const changeSize = () => {
    restartButton.addEventListener("click", () => {
        for (let i = 0; i < gridArea; i++) {
            grid.firstChild.remove();
        }
        gridSize = prompt("grid size", 10);
        gridArea = gridSize * gridSize;
        createGrid();
        paintSpaceBlack();
    });
};
changeSize();

const paintSpaceBlack = () => {
    const spaces = document.querySelectorAll("div.space");

    spaces.forEach(space => space.addEventListener("mouseover", () => {
        space.setAttribute("style", "background: black;");
    }));
};
paintSpaceBlack();
