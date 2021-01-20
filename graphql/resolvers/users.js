const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { SECRET_KEY } = require('../../config')
module.exports = {
	Mutation: {
	async	register(
			_,
			{
				regInput: { username, email, password, confirmPass }
			},
			context,
			info
			)
			{
			// TODO: Validate user data
			// TODO: User doesn't already exist
			// TODO: Hash password and create auth token
			password = await bcrypt.hash(password, 12);

			const newUser = new User({
				email,
				username,
				password,
				createdAt: new Date().toISOString()
			});

			const res = await newUser.save();

			const token = jwt.sign({
				id: res.id,
				email: res.email,
				username: res.username
			}, SECRET_KEY, {expiresIn: '1h'});

			return {
				...res._doc,
				id: res.id,
				token
			}

			}
	}
}
