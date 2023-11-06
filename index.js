const results = [{
    img: "./assets/images/icon-reaction.svg",
    name: "Reaction",
    percent: "80 / 100",
    class: "reaction"
}, {
    img: "./assets/images/icon-memory.svg",
    name: "Memory",
    percent: "92 / 100",
    class: "memory"
}, {
    img: "./assets/images/icon-verbal.svg",
    name: "Verbal",
    percent: "61 / 100",
    class: "verbal"
}, {
    img: "./assets/images/icon-visual.svg",
    name: "Visual",
    percent: "72 / 100",
    class: "visual"
}];

let resultsHTML = "";
results.forEach((result) => {
    resultsHTML += `
        <div>
            <img src="${result.img}">
            <p class="${result.class}">${result.name}</p>
            <span>${result.percent}</span>
        </div>
    `
})

document.querySelector('.right-side-content').innerHTML = resultsHTML;