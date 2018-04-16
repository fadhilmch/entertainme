const MovieType = require('./movie/movie.type')
const TvshowType = require('./tvshow/tvshow.type')
const { query, all } = require('./query/query.type')
const mutation = require('./mutation/mutation.type')

const resolvers = require('./resolvers')

const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({ 
  typeDefs: [
    query,
    mutation,
    all,
    MovieType,
    TvshowType,
  ],
  resolvers
 })

module.exports = schema