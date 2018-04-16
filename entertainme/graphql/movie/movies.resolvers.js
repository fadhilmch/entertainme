const axios = require('axios')

const movieResolvers = async () => {
  const movies = await axios({
    method: 'get',
    url: 'http://localhost:3001/movies'
  })
  return movies.data.data
}

module.exports = movieResolvers