"use strict";

const canvas = document.querySelector("#grid-container");
const gridSize = 40;
const gridArea = gridSize * gridSize;
const spaceSize = 100 / gridSize;

// Change the flex basis percentage of .space selector in CSS file
document.documentElement.style.cssText =
`--space-basis-percentage: ${spaceSize}%;`

const createGrid = () => {
    for (let i = 0; i < gridArea; i++) {
        const space = document.createElement("div");
        space.setAttribute("class", "space")
        canvas.appendChild(space);
    }
};
createGrid();

const spaces = document.querySelectorAll("div.space");

const paintSpaceBlack = () => {
    spaces.forEach(space => space.addEventListener("mouseover", () => {
        space.setAttribute("style", "background: black;");
    }));
};
paintSpaceBlack();
