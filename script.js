const dropdown = document.getElementById("dropdown");
const dessertInfo = document.querySelector(".dessert-info");
let desserts = [];

document.addEventListener("DOMContentLoaded", () => {
    handleLoad();
});

dropdown.addEventListener("change", handleChange);

// fetching info to my select dropdown menu
const fetchURL = 'http://localhost:3000/desserts';
function handleLoad() {
    fetch(fetchURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        data.forEach(dessert => {
          appendInfoToOption(dessert);
        });
        desserts = data;
      });
}

function appendInfoToOption(dessert) {
    const newOption = document.createElement("option");
    newOption.innerHTML = dessert.name;
    dropdown.appendChild(newOption);
}

function handleChange(e) {
    const dessertName = e.target.value;
    if (dessertName === "option1") {
        dessertInfo.textContent = "";
    } else {
    desserts.find(cake => {
        if (cake.name === dessertName) {
            showDessertsInfo(cake);
        }
    })
};
}

function showDessertsInfo(dessert) {
    const img = document.createElement("img");
    img.src = dessert.pictureURL;

    const h2 = document.createElement("h2");
    h2.textContent = dessert.name;

    const h4 = document.createElement('h4');
    h4.innerText = "INGREDIENTS:";
    const ul = document.createElement("ul");
    const ingredients = dessert.ingridients;
    ingredients.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    const h5 = document.createElement("h5");
    h5.innerText = "INSTRUCTIONS";
    const ol = document.createElement("ol");
    const instructions = dessert.instruction;
    instructions.forEach(instr => {
        const li1 = document.createElement("li");
        li1.textContent = instr;
        ol.appendChild(li1);
    });

    const likePar = document.createElement('p');
    likePar.innerText = `${dessert.amountOfLikes} likes`;
    const btn = document.createElement('button');
    btn.setAttribute("id", "likeBtn");
    btn.innerText = "LIKE THIS DESSERT";
    btn.append(likePar);

    dessertInfo.textContent = "";
    dessertInfo.append(h2, img, h4, ul, h5, ol, btn);
    img.addEventListener("mouseover", () => img.setAttribute("style", "box-shadow: 10px 10px #dd6248;"));
    img.addEventListener("mouseout",()=> img.setAttribute("style", "box-shadow: 0 0"));
    btn.addEventListener('click', () => {
        //every time you click on the like button the number will go up by 1
        dessert.amountOfLikes += 1;
        likePar.innerText = `${dessert.amountOfLikes} likes`;
    });
}