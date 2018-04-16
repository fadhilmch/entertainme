const { makeExecutableSchema } = require('graphql-tools');
const axios = require('axios')

const typeDefs = `
  type Query {
    movies: [Movie],
    tvshows: [Tvshow],
    all: All
  }

  type All {
    movies: [Movie],
    tvshows: [Tvshow]
  }

  type Movie {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }

  type Tvshow {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }
`

const resolvers = {
  Query: {
    all: async () => {
      const movies = await axios({
        method: 'get',
        url: 'http://localhost:3001/movies'
      })
    
      const tvshows = await axios({
        method: 'get',
        url: 'http://localhost:3002/tvshows'
      })
    
      let tempObj = {
        movies: movies.data.data,
        tvshows: tvshows.data.data
      }

      console.log(tempObj.movies[0])
      
      return tempObj
    },
    movies: async () => {
      const movies = await axios({
        method: 'get',
        url: 'http://localhost:3001/movies'
      })
      // consle.log('data ', movies.data)
      return movies.data.data
    },
    tvshows: async () => {
      const tvshows = await axios({
        method: 'get',
        url: 'http://localhost:3002/tvshows'
      })
      return tvshows.data.data
    }
   },

}

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
 })

module.exports = schema