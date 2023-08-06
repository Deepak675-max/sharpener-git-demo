

// ELEMENT SELECTORS

// // Single Element Selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // Multiple Element Selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));


// // MANIPULATING THE DOM
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';


// // EVENTS

// // Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

userList.addEventListener('click', removeItem);
userList.addEventListener('click', editItem);


function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        const li = document.createElement('li');


        // Add text node with input values
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));

        var editBtn = document.createElement('button');

        // Add classes to del button
        editBtn.className = 'btn btn-danger btn-sm float-end edit';

        // Append text node
        editBtn.appendChild(document.createTextNode('edit'));

        // Append button to li
        li.appendChild(editBtn);

        var deleteBtn = document.createElement('button');

        // Add classes to del button
        deleteBtn.className = 'mx-2 btn btn-danger btn-sm float-end delete';

        // Append text node
        deleteBtn.appendChild(document.createTextNode('delete'));

        // Append button to li
        li.appendChild(deleteBtn);

        const userData = {
            name: nameInput.value,
            email: emailInput.value
        }

        const data = JSON.stringify(userData);

        localStorage.setItem(emailInput.value, data);

        // Append to ul
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            const data = li.firstChild.textContent.split(':');
            localStorage.removeItem(data[1]);
            userList.removeChild(li);
        }
    }
}


function editItem(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        const data = li.firstChild.textContent.split(':');
        const name = document.querySelector('#name');
        name.value = data[0];
        const email = document.querySelector('#email');
        email.value = data[1];
        localStorage.removeItem(data[1]);
        userList.removeChild(li);
    }
}