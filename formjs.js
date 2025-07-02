		
		// Get the Form Element for Login
		
		const form = document.getElementById('myForm');
		const emailInput = document.getElementById('email');
		const passwordInput = document.getElementById('password');
		
		
		// Add Event listener to the form's submit
		
		form.addEventListener('submit', (e) =>{
		e.preventDefault();
		
		const emailValue = emailInput.value.trim();
		const passwordValue = passwordInput.value.trim();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		let isValid = true;
			
			
		emailError.textContent = '';
		passwordError.textContent = '';
		
		
			// Validate Email
			if (emailValue === '' ){
				emailError.textContent = 'Please enter your email';
				emailError.style.color = 'red';
				isValid = false;
			} else if (!emailRegex.test(emailValue)){
				emailError.textContent = 'Please enter a valid email';
				emailError.style.color = 'red';
				emailInput.focus();
				isValid = false;
			} else {
				emailError.textContent = '';
			}
			
			//Validate password
			
			if (passwordValue === '' ){
				passwordError.textContent = 'Please enter your Password';
				passwordError.style.color = 'red';
				isValid = false;
			} else if (passwordValue.length < 8){
				passwordError.textContent = 'Password must be 8 characters long';
				passwordInput.focus();
				passwordError.style.color = 'red';
				isValid = false;
			} else {
				passwordError.textContent = '';
			}
			
			if (isValid){
				form.submit();
			}
			
		});
		


			emailInput.addEventListener('input', ()=>{
			const emailValue = emailInput.value.trim();
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			
			if (emailValue === '' ){
				emailError.textContent = 'Please enter your email';
				emailError.style.color = 'red';
				isValid = false;
			} else if (!emailRegex.test(emailValue)){
				emailError.textContent = 'Please enter a valid email';
				emailError.style.color = 'red';
				emailInput.focus();
				isValid = false;
			} else {
				emailError.textContent = '';
			}
			})
			
			passwordInput.addEventListener('input', ()=>{
			const passwordValue = passwordInput.value.trim();
			if (passwordValue === '' ){
				passwordError.textContent = 'Please enter your Password';
				passwordError.style.color = 'red';
				isValid = false;
			} else if (passwordValue.length < 8){
				passwordError.textContent = 'Password must be 8 characters long';
				passwordInput.focus();
				passwordError.style.color = 'red';
				isValid = false;
			} else {
				passwordError.textContent = '';
			}
			
			});