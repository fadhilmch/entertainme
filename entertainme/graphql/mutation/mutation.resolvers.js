const axios = require('axios')

const MutationResolvers = {
  addMovie: async (_, {title, overview, poster_path, popularity, tag }) => {
    // console.log('masuk')
    return await axios({
      method: 'post',
      url: `http://localhost:3001/movies`,
      data: {
        title,
        overview,
        poster_path,
        popularity,
        tag
      }
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
