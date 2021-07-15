module.exports.validateRegisterInput = (
	username,
	email,
	password,
	confirmPass
	) => {
		const errors = {};
		if (username.trim() === ''){
			errors.username = 'Username must not be empty';
		}
		if(email.trim === ''){
			errors.email = 'Email must not be empty'
		} else {
			const regEx = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
			if(!email.match(regEx)){
				errors.email = 'Email must be a valid email address';
			}
		}
		if(password === ''){
			errors.password = 'Password must not be empty';
		} else if(password !== confirmPass){
			errors.confirmPass = 'Passwords must match';
		}

		return {
			errors,
			valid: Object.keys(errors).length < 1
		}
	};

	module.exports.validateLoginInput = (username, password) =>
	{
		const errors = {};
		if (username.trim() === ''){
			errors.username = 'Username must not be empty';
		}
		if(password === ''){
			errors.password = 'Password must not be empty';
		}

		return {
			errors,
			valid: Object.keys(errors).length < 1
		};
	}
