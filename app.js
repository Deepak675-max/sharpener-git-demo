const header = document.getElementById('main-header');

header.style.borderBottom = "solid 3px #000"

const addItem = document.getElementById('title');

addItem.style.color = "green";

addItem.style.fontWeight = "bold";

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('#itemvalue');
    const form = document.querySelector('#my-form');
    var listItem = document.createElement("li");
    listItem.classList.add("list-group-item")
    listItem.appendChild(document.createTextNode(inputValue.value));
    items.appendChild(listItem);
    form.reset();
    inputValue.focus()
})