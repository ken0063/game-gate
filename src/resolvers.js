import { games, reviews, authors } from './_db.js';

export const resolvers = {
    Query: {
        games: () => games,
        reviews: () => reviews,
        authors: () => authors,
        game(_, args) {
            return games?.find(game => game?.id === args?.id);
        },
        review(_, args) {
            return reviews?.find(review => review?.id === args?.id);
        },
        author(_, args) {
            return authors?.find(author => author?.id === args?.id);
        }
    },

    Game: {
        reviews(parent) {
            return reviews.filter(review => review.gameId === parent.id);
        }
    },

    Author: {
        reviews(parent) {
            return reviews.filter(review => review.authorId === parent.id);
        }
    },

    Review: {
        game(parent) {
            return games.find(game => game.id === parent.gameId);
        },

        author(parent) {
            return authors.find(author => author.id === parent.authorId);
        }
    }
}