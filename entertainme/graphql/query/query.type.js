const queryType = `
  type Query {
    movies: [Movie],
    tvshows: [Tvshow],
    all: All
  }
`
const allType = `
  type All {
    movies: [Movie],
    tvshows: [Tvshow]
  }  
`


module.exports = {query: queryType, all: allType}