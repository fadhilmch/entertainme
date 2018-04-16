const axios = require('axios')

const tvshowResolvers = async () => {
  const tvshows = await axios({
    method: 'get',
    url: 'http://localhost:3002/tvshows'
  })
  return tvshows.data.data
}

module.exports = tvshowResolvers