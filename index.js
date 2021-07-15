
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require ('mongoose');


const typeDefs = require('./graphql/typeDefs')
const User = require('./models/User')
const Post = require('./models/Post');
const { MONGODB } = require('./config.js');

// For each query it has a corresponding resolver
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		console.log('Database connected');
		return server.listen({port: 8000});
	})
	.then (res => {
		console.log(`Server running at ${res.url}`)
});
