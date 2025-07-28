"use strict";

const canvas = document.querySelector("#grid-container");

const gridSize = 16;
const gridArea = gridSize * gridSize;

const createSquares = () => {
    for (let i = 0; i < gridArea; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square")
        canvas.appendChild(square);
    }
};

createSquares();