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

buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
})

modalAuth.style.color = "red";



closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
})

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