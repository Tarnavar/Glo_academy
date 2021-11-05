const buttonAuth = document.querySelector('.button-auth')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')

const logout = () => {
    buttonAuth.style.display = 'flex'

    buttonOut.style.display = 'none'
    userName.style.display = 'none'
    userName.textContent = ''

    localStorage.removeItem('user')
}

const login = (user) => {
    buttonAuth.style.display = 'none';

    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = user.login
    modalAuth.style.display = 'none'
}

buttonOut.addEventListener('click', () => {
    logout();
})

// const logout () => {

// }

// function sayMeow() {
//     console.log("say Meow!");
// }


// const sayMeow = () => {
//         console.log("say Meow!");
//     }
// sayMeow();
// sayMeow();
// sayMeow();
// sayMeow();

// const obj = {
//     name: 'Alex',
//     age: '30',
//     sayHello: function () {
//         console.log('Привет, меня зовут Alex!');
//     }
// }

// obj.sayHello();

// const arr = [1, 2, 3, 4, 5]
// console.log(arr[0]+arr[3]);



// console.log(modalAuth);

// const counter = (a,b) => {
//     return a + b;
// }
// console.log(counter(2, 3));
// console.log(counter(6, 7));
// console.log(counter(5, 5));

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
})

modalAuth.style.color = "red";



closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
})


// console.log(logInForm)

logInForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const user = {
        login:inputLogin.value,
        password:inputPassword.value
    }
        localStorage.setItem('user', JSON.stringify(user))
        login(user)
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')))
}