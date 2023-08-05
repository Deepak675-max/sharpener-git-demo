const items = document.querySelectorAll('.list-group-item');
items.forEach(item => {
    if (item.innerHTML == items[2].innerHTML) {
        item.style.backgroundColor = "green";
    }
    item.style.fontWeight = 'bold';
})