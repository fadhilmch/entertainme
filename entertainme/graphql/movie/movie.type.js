const movieType = `
  type Movie {
    _id: String
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }
`

module.exports = movieType