const navbar = document.querySelector('.nav');
const navBack = navbar.querySelector('.nav__btn_back');
const navForward = navbar.querySelector('.nav__btn_forward');
const navAll = navbar.querySelector('.nav__btn_all');

const backEvent = new KeyboardEvent("keydown", {
  key: "ArrowLeft",
  keyCode: 37,
  which: 37
});
navBack.addEventListener('click', (el) => {
	document.dispatchEvent(backEvent);
});

const forwardEvent = new KeyboardEvent("keydown", {
  key: "ArrowRight",
  keyCode: 39,
  which: 39
});
navForward.addEventListener('click', (el) => {
	document.dispatchEvent(forwardEvent);
});

const allEvent = new KeyboardEvent("keydown", {
  key: "Escape",
  keyCode: 27,
  which: 27
});
navAll.addEventListener('click', (el) => {
	document.dispatchEvent(allEvent);
});
