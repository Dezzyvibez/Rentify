const hamburger = document.querySelector('#hamburger');	
const nav = document.querySelector('#nav');

if (hamburger){
// add event listner to mobile menubar

hamburger.addEventListener('click', () => {
		nav.classList.toggle('active');
		})

	};