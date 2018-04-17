const Mutation = `
  input MovieInput {
    title: String!,
    overview: String!,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }

  input TvshowInput {
    title: String!,
    overview: String!,
    poster_path: String,
    popularity: Float,
    tag: [String] 
  }

  type Mutation {
    addMovie ( movie: MovieInput ) : Movie,
    addTvshow ( tvshow: TvshowInput ) : Tvshow
  }
` 

module.exports = Mutation