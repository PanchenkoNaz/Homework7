// 1.
const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
    const p = document.createElement('p');
    p.textContent = i;
    numbersDiv.appendChild(p);
}

// 2.
const stringsDiv = document.querySelector('.strings_container');
const stringsArray = ['Nazar', 'Panchenko', 'Hello', 'Thanks', 'cat'];

for (let i = 0; i < stringsArray.length; i++) {
    const p = document.createElement('p');
    p.textContent = stringsArray[i];
    stringsDiv.appendChild(p);
}


// 3.
const users = [
    { first_name: "Nazar", last_name: "Panchenko", age: 25 },
    { first_name: "Victoria", last_name: "Kirkevich", age: 16 },
    { first_name: "Dima", last_name: "Kucher", age: 30 },
    { first_name: "Max", last_name: "Lysiuk", age: 18 },
];

const usersContainer = document.querySelector(".users_container");

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.age >= 18) {
        const card = document.createElement("div");
        card.classList.add("user_card");
        const name = document.createElement("h2");
        name.textContent = `${user.first_name} ${user.last_name}`;
        const age = document.createElement("p");
        age.textContent = `Age: ${user.age}`;
        card.appendChild(name);
        card.appendChild(age);
        usersContainer.appendChild(card);
    }
}
