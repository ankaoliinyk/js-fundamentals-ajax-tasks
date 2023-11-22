// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

let input = document.querySelector("#userNameInput");
let button = document.querySelector("#getUserButton")
let output = document.querySelector("#userCity");

button.addEventListener("click", function(event) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        let user = data.find(function(el){
            if(input.value==el.name) {
                return el;
            }
        })
        output.innerHTML=user.address.city;
    });
})