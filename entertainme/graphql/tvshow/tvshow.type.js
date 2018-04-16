const tvshowType = `
  type Tvshow {
    _id: String
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }
`

module.exports = tvshowType