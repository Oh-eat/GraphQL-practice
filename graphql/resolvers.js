const Movie = require("./db");

const resolvers = {
  Query: {
    movies: () => Movie.movies,
    movie: (_, { id }) => Movie.getById(id)
  },
  Mutation: {
    addMovie: (_, { title, score }) => Movie.addMovie({ title, score }),
    deleteMovie: (_, { id }) => Movie.deleteMovie({ id })
  }
};

module.exports = resolvers;
