let table = document.querySelector("#pixelCanvas")
let btn = document.querySelector("#btn");

function makeGrid() {
    let gridHeightValue = document.querySelector("#inputHeight").value
    let gridWidthValue = document.querySelector("#inputWidth").value
    table.innerHTML = ""

    for (let i = 0; i < gridHeightValue; i++) {
        let createRow = document.createElement("tr");
        table.appendChild(createRow);

        for (let j = 0; j < gridWidthValue; j++) {
            let createcolumn = document.createElement("td")
            createRow.appendChild(createcolumn);

        }
    }

}

function pickColor() {

    document.querySelectorAll("td").forEach((el) => {

        el.addEventListener("click", function() {
            let color = document.querySelector("#colorPicker").value;
            el.style.backgroundColor = color
        })


    })

}
btn.addEventListener("click", (e) => {
    e.preventDefault()
    makeGrid();
    pickColor()
})