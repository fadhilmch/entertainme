const Mutation = `
  input MovieInput {
    title: String!,
    overview: String!,
    poster_path: String,
    popularity: Float,
    tag: [String]
  }

  type Mutation {
    addMovie ( 
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      tag: [String]
    ) : Movie,
    addTvshow (
      title: String!,
      overview: String!,
      poster_path: String,
      popularity: Float,
      tag: [String]
    ) : Tvshow
  }
` 

module.exports = Mutation