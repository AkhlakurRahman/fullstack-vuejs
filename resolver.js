module.exports = {
  Query: {
    getAllPhotos: async (_, args, { Photo }) => {
      const posts = await Photo.find({})
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

    addPhoto: async (
      _,
      { title, imageUrl, categories, description, createdBy },
      { Photo }
    ) => {
      const newPhoto = await new Photo({
        title,
        imageUrl,
        categories,
        description,
        createdBy
      }).save();

      return newPhoto;
    }
  }
};
