// declaring Global variables

//grabs div that i am gonna append the dessert info to
const desertInfoAppend = document.getElementById("results")
//grabs the form 
const form = document.getElementById("dropdown")
//grabs the select menu
const selectMenu = document.getElementById("nameOfDessert")
let desserts = []

document.addEventListener("DOMContentLoaded", () => {
    handleLoad()
    form.addEventListener("submit", handleSubmit)
})

// fetching info to my select dropdown menu
const fetchURL = 'http://localhost:3000/desserts'
function handleLoad() {
    fetch(fetchURL)
        .then(res => res.json())
        .then(data => {
            data.forEach(dessert => {
                appendInfoToOption(dessert)
            })
            desserts = data
         } )};

function handleSubmit(e){
    e.preventDefault()
    //create a variable that captures the value of each option 
    const dessertName = e.target.select.value
    desserts.find(cake => {
        cake.name = dessertName
        showDessertsInfo(cake)
        }
    )
}
    //appends a dessert name to the options list
function appendInfoToOption(dessert) {
        const newOption = document.createElement("option")
        newOption.innerHTML = dessert.name
        selectMenu.appendChild(newOption)
        
}
// get the value of each option 
function showDessertsInfo(cake) {
        const img = document.createElement("img")
        img.src = cake.pictureURL
        const h2 = document.createElement("h2")
        h2.textContent = cake.name
        desertInfoAppend.append(h2, img)

    }
