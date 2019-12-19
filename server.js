const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: 'variables.env' });
const User = require('./models/User');
const Post = require('./models/Post');
const resolvers = require('./resolver');

const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => console.log('DB Connected'))
	.catch(error => console.log(error));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: {
		User,
		Post
	}
});

server.listen(4444).then(({ url }) => {
	console.log(`Server started on port: ${url}`);
});
