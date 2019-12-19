module.exports = {
	Query: {
		getAllPosts: async (_, args, { Post }) => {
			const posts = await Post.find({})
				.sort({ createdAt: 'desc' })
				.populate({
					path: 'createdBy',
					model: 'User'
				});
			return posts;
		}
	},

	Mutation: {
		signupUser: async (_, { username, email, password }, { User }) => {
			const existingUser = await User.findOne({ username });
			if (existingUser) {
				throw new Error('User already exists');
			}

			const newUser = await new User({
				username,
				email,
				password
			}).save();

			return newUser;
		},

		addPost: async (
			_,
			{ title, imageUrl, categories, description, createdBy },
			{ Post }
		) => {
			const newPost = await new Post({
				title,
				imageUrl,
				categories,
				description,
				createdBy
			}).save();

			return newPost;
		}
	}
};
