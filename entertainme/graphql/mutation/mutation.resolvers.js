const axios = require('axios')

const MutationResolvers = {
  addMovie: async (_, {movie}) => {
    console.log('masuk',movie)
    return await axios({
      method: 'post',
      url: `http://localhost:3001/movies`,
      data: movie
    })
  }, 
  addTvshow: async (_, {title, overview, poster_path, popularity, tag }) => {
    return await axios({
      method: 'post',
      url: `http://localhost:3002/tvshows`,
      data: {
        title,
        overview,
        poster_path,
        popularity,
        tag
      }
    })
  }, 
}

module.exports = MutationResolvers
