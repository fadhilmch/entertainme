const Movie = require('./movie/movies.resolvers')
const Tvshow = require('./tvshow/tvshow.resolvers')
const Query = require('./query/query.resolvers')
const Mutation = require('./mutation/mutation.resolvers')

const resolvers = {
  Query: {
    all: Query,
    movies: Movie,
    tvshows: Tvshow
   },
   Mutation: Mutation
  //  Mutation
  // Query,
  // Movie,
  // Tvshow,
  // Mutation
}

module.exports = resolvers