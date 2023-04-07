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
    console.log(dessertName)
    desserts.find(cake => {
       if (cake.name === dessertName){
        showDessertsInfo(cake)
        }}
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
       // adds an image for a dessert 
        const img = document.createElement("img")
        img.src = cake.pictureURL
       //adds a dessert name 
        const h2 = document.createElement("h2")
        h2.textContent = cake.name
       //create heading for Ingridients
        const h5 = document.createElement('h5')
        h5.innerText= "INGREDIENTS:"
        //creates a list of ingredients as li elements 
        const ul = document.createElement("ul")
        const ingredients = cake.ingridients
        ingredients.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item
            ul.appendChild(li)


        desertInfoAppend.textContent = ""
        //adds an instruction for cooking a specific dessert 
        desertInfoAppend.append(h2, img, h5, ul)

        })}
