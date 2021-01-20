const postsRes = require('./posts');
const usersRes = require('./users');

module.exports = {
	Query: {
		...postsRes.Query
	},
	Mutation: {
		...usersRes.Mutation
	}
}
