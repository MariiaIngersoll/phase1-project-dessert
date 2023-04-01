// Global variables
const desertInfoAppend = document.getElementById("results")
const dropdown = document.getElementById("dropdown")
const selectMenu = document.getElementById("nameOfDrink")
const valueOfSelectedOption = document.getElementsByTagName("option")

document.addEventListener("DOMContentLoaded",()=>{
    handleLoad()
})
// fetching info to my select dropdown menu
const fetchURL =  'http://localhost:3000/desserts'
function handleLoad(){
    fetch(fetchURL)
    .then(res => res.json())
    .then(data => data.forEach(dessert => {
        appendInfoToOption(dessert)
      }));
        
//appends a dessert name to the options list
function appendInfoToOption(dessert){
    console.log(dessert)
        const newOption = document.createElement("option")
        newOption.innerHTML = dessert.name
        selectMenu.appendChild(newOption)
        console.log(newOption)
        
        }
    };

function selectAnOption(){
    valueOfSelectedOption.addEventListener("click", (){
        const createImg = 
    })
}
