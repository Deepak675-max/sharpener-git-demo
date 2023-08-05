// const items = document.querySelectorAll('.list-group-item');
// items.forEach(item => {
//     if (item.innerHTML == items[2].innerHTML) {
//         item.style.backgroundColor = "green";
//     }
//     item.style.fontWeight = 'bold';
// })

const item = document.getElementsByClassName('last-item')

item[0].style.color = "red";
item[0].classList.add("list-group-item");