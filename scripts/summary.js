import { results } from "./results.js";

let resultsHTML = "";
results.forEach((result) => {
    resultsHTML += `
    <div class="container ${(result.name).toLowerCase()}-container">
        <div class="icons">
            <img src="${result.img}">
        </div>
        <div class="${(result.name).toLowerCase()}">
            ${result.name}
        </div>
        <div class="hundred-percent">
            <p class="percent">${result.percent} <span class="hundred">/ 100</span></p>
        </div>
        
    </div>
    `
})

document.querySelector('.right-side-content').innerHTML = resultsHTML;