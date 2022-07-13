import {gql} from '@apollo/client';

export const typeDefs = gql`
  type Movie {
    id: ID
    title: String!
    runtime: String!
    year: String!
    genres: String!
    director: String!
    actors: String
    plot: String
    posterUrl: String
  }

  type Query {
    movies: [Movie!]!
    filterMovies(filter: String, query: String): [Movie]!
    movie(id: ID!): Movie!
    getByYear(year: String!): [Movie]!
  }

  input MovieInput {
    title: String!
    description: String!
    rating: String!
    yearOfRelease: String!
    genre: String!
    createdAt: String
  }

  type Mutation {
    createMovie(input: MovieInput!): Movie!
  }
`;

export const GetMovies = gql`
  query GetMovies {
    movies {
      id
      title
      runtime
      year
      genres
      director
      actors
      plot
      posterUrl
    }
  }
`;

export const GetByYear = gql`
  query Query($year: String!) {
    getByYear(year: $year) {
      id
      title
      runtime
      year
      genres
      director
      actors
      plot
      posterUrl
    }
  }
`;

export const QueryMovies = gql`
  query Query($filter: String, $query: String) {
    filterMovies(filter: $filter, query: $query) {
      id
      title
      runtime
      year
      genres
      director
      actors
      plot
      posterUrl
    }
  }
`;
