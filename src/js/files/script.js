// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
//======================================================================================
// Sign in window
const wrapper = document.querySelector('.form-box__content');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', () => {
	wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
	wrapper.classList.remove('active');
});