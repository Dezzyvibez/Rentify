
const launchDate = new Date('2025-12-30T00:00:00');
const countdownElement = document.getElementById('countdown');
countdownElement.style.textAlign = 'center';
countdownElement.style.display = 'flex';
countdownElement.style.fontSize = '50px';
countdownElement.style.fontWeight = 'bold';


const daysElement = document.createElement('div');
daysElement.style.textAlign = 'center';
const hoursElement = document.createElement('div');
hoursElement.style.textAlign = 'center';
const minutesElement = document.createElement('div');
minutesElement.style.textAlign = 'center';
const secondsElement = document.createElement('div');
secondsElement.style.textAlign = 'center';

daysElement.style.marginRight = '20px';
hoursElement.style.marginLeft = '150px';
minutesElement.style.marginLeft = '150px';
secondsElement.style.marginLeft = '150px';

countdownElement.appendChild(daysElement);
countdownElement.appendChild(hoursElement);
countdownElement.appendChild(minutesElement);
countdownElement.appendChild(secondsElement);




function updateCountdown(){
	const now = new Date().getTime();
	const timeLeft = launchDate  - now;
	
	if (
	timeLeft <= 0) {
		daysElement.innerHTML = '<div style="font-size: 48px;">0</div> <div style="font-size: 24px;">Launched </div>';
		hoursElement.style.display = 'none';
		minutesElement.style.display = 'none';
		secondsElement.style.display = 'none';
	} else {
	const days = Math.floor(timeLeft/ (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60 ));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000 );
	
	daysElement.innerHTML = '<div style="font-size: 40px;">' + days +'</div> <div style="font-size: 20px; color: red;">Days </div>';
	hoursElement.innerHTML = '<div style="font-size: 40px;">'+ hours +'</div><div style="font-size: 20px;color: red;">Hours </div>';
	minutesElement.innerHTML = '<div style="font-size: 40px;">' + minutes +'</div><div style="font-size: 20px; color: red;">minutes </div>';
	secondsElement.innerHTML = '<div style="font-size: 40px;">'+ seconds +'</div><div style="font-size: 20px; color: red;">seconds </div>';
		
	}
		setTimeout(updateCountdown, 1000);
}
updateCountdown();