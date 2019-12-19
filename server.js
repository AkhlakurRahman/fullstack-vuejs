const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });
const User = require('./models/User.js');
const Post = require('./models/Post.js');

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB Connected'))
	.catch(error => console.log(error));

const typeDefs = gql`
	type Todo {
		task: String
		completed: Boolean
	}

	type Query {
		getTodos: [Todo]
	}
`;

const resolvers = {
	Query: {
		getTodos: () => {
			return todos;
		}
	}
};

const server = new ApolloServer({
	typeDefs,
	context: {
		User,
		Post
	}
});

server.listen(4444).then(({ url }) => {
	console.log(`Server started on port: ${url}`);
});
