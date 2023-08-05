const btn = document.querySelector('.btn');
const form = document.querySelector('#my-box');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    console.log(name);
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const items = document.querySelector('.items');
    var listItem = document.createElement("li");
    listItem.classList.add("item", "mt-2", "p-2")
    listItem.appendChild(document.createTextNode(`Name: ${name.value} Email: ${email.value} Phone: ${phone.value}`));
    items.appendChild(listItem);
})



btn.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    form.style.backgroundColor = "lightgreen";
})


btn.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    form.style.backgroundColor = "white";
})

