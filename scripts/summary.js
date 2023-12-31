import { results } from "./results.js";

let resultsHTML = "";
results.forEach((result) => {
    resultsHTML += `
    <div class="container item-${(result.name).toLowerCase()}">
        <div class="icons">
            <img src="${result.img}" alt="${(result.name).toLowerCase()}">
        </div>
        <div class="item">
            ${result.name}
        </div>
        <div class="hundred-percent">
            <p class="percent">${result.percent} <span class="hundred">/ 100</span></p>
        </div>
        
    </div>
    `
})

document.querySelector('.right-side-content').innerHTML = resultsHTML;