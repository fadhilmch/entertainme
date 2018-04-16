const axios = require('axios')

const queryResolvers = async () => {
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
}

module.exports = queryResolvers