const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})


const userIcon = document.querySelector('.userlogin');
const loginBox = document.querySelector('.SignUp_LogIn');
userIcon.addEventListener('click', () => {
    loginBox.classList.add('show');
});
loginBox.addEventListener('click', (e) => {
    if (e.target === loginBox) {
        loginBox.classList.remove('show');
    }
});