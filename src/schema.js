export const typeDefs = `#graphql
    type Game {
        id: ID!
        name: String!
        genre: String!
        platform: [String!]!
        year: Int!
        publisher: String!
        developer: String!
        reviews: [Review!]

    }

    type Review {
        id: ID!
        rating: Float!
        content: String!
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified:Boolean!
        reviews: [Review!]
    }


    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
        game(id: ID!): Game
        review(id: ID!): Review
        author(id: ID!): Author
    }
`;