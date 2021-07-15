const { gql } = require('apollo-server');

module.exports = gql`
	type Post{
		id: ID!
		username: String!
		body: String!
		createdAt: String!
	}
	type User{
		id: ID!
		username: String!
		email: String!
		token: String!
		createdAt: String!
	}
	input RegInput{
		username: String!
		password: String!
		confirmPass: String!
		email: String!
	}
	type Query {
		getPosts: [Post]
		getPost(postId: ID!): Post
	}
	type Mutation {
		register(regInput: RegInput): User!
		login(username: String!, password: String!): User!
		createPost(body: String!): Post!
		deletePost(postId: ID!): String!
	}
`;
