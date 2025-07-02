
	
		// Get the Form Element for SignUp
		const form = document.getElementById('Form');
		const emailInput = document.getElementById('email');
		const passwordInput = document.getElementById('password');
		const confirmPasswordInput = document.getElementById('confirmPassword');
		const emailError = document.getElementById('emailError');
		const passwordError = document.getElementById('passwordError');
		const confirmPasswordError = document.getElementById('confirmPasswordError');
		
		
		// Add Event listener to the form's submit
		
		form.addEventListener('submit', (e) =>{
		e.preventDefault();
		const formData = new FormData(form);
		const emailValue = emailInput.value.trim();
		const passwordValue = passwordInput.value.trim();
		const confirmPasswordValue = confirmPasswordInput.value.trim();
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		let isValid = true;
		
		

		
		
		//Reset error messages
		
		emailError.textContent = '';
		passwordError.textContent = '';
		confirmPasswordError.textContent = '';
		
		
			// Validate Email
			if (emailValue === '' ){
				emailError.textContent = 'Enter your Email';
				emailError.style.color = 'red';
				isValid = false;
			} else if (!emailRegex.test(emailValue)){
				emailError.textContent = 'Enter a valid email';
				
				emailInput.focus();
				isValid = false;
			} else {
				emailError.textContent = '';
			}
			
			//Validate password
			
			if (passwordValue === '' ){
				passwordError.textContent = 'Enter Password';
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
			
			if (confirmPasswordValue === ''){
				confirmPasswordError.textContent = 'Confirm Password';
				confirmPasswordError.style.color = 'red';
				passwordInput.focus();
				isValid = false;
			} else if (confirmPasswordValue !== passwordValue){
				confirmPasswordError.textContent = 'Passwords does not match';
				confirmPasswordError.style.color = 'red';
				passwordInput.focus();
				isValid = false;
			} else{
				confirmPasswordError.textContent = '';
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
			
			
			confirmPasswordInput.addEventListener('input', ()=>{
			const confirmPasswordValue = confirmPasswordInput.value.trim();
			if (confirmPasswordValue === ''){
				confirmPasswordError.textContent = 'Password is is required';
				confirmPasswordError.style.color = 'red';
				passwordInput.focus();
				isValid = false;
			} else if (confirmPasswordValue !== passwordValue){
				confirmPasswordError.textContent = 'Passwords does not match';
				confirmPasswordError.style.color = 'red';
				passwordInput.focus();
				isValid = false;
			} else{
				confirmPasswordError.textContent = '';
			}
			});



