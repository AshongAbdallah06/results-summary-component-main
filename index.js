const results = [{
    img: "./assets/images/icon-reaction.svg",
    name: "Reaction",
    percent: "80",
    class: "reaction"
}, {
    img: "./assets/images/icon-memory.svg",
    name: "Memory",
    percent: "92",
    class: "memory"
}, {
    img: "./assets/images/icon-verbal.svg",
    name: "Verbal",
    percent: "61",
    class: "verbal"
}, {
    img: "./assets/images/icon-visual.svg",
    name: "Visual",
    percent: "72",
    class: "visual"
}];

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