module.exports.movies = [
  {
    id: 0,
    title: "a",
    score: 5
  },
  {
    id: 1,
    title: "b",
    score: 6
  },
  {
    id: 2,
    title: "c",
    score: 7
  },
  {
    id: 3,
    title: "d",
    score: 8
  },
  {
    id: 4,
    title: "e",
    score: 9
  },
  {
    id: 5,
    title: "f",
    score: 10
  }
];

module.exports.getById = id => this.movies.filter(movie => movie.id === id)[0];

module.exports.addMovie = ({ title, score }) => {
  const newMovie = {
    id: Math.max(...this.movies.map(movie => movie.id)) + 1,
    title,
    score
  };
  this.movies.push(newMovie);
  return newMovie;
};

module.exports.deleteMovie = ({ id }) => {
  const nextMovies = this.movies.filter(movie => movie.id !== id);
  if (nextMovies.length === this.movies.length) return false;
  this.movies = nextMovies;
  return true;
};
