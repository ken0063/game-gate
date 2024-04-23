


export let games = [
    {
        id: '1',
        name: 'Super Mario Bros',
        genre: 'Platformer',
        platform: ['NES'],
        year: 1985,
        publisher: 'Nintendo',
        developer: 'Nintendo',
    },
    {
        id: '2',
        name: 'The Legend of Zelda',
        genre: 'Adventure',
        platform: ['NES'],
        year: 1986,
        publisher: 'Nintendo',
        developer: 'Nintendo',
    }
];

export let reviews = [

    {
        id: '1',
        rating: 9.5,
        content: 'This game is a masterpiece!',
        authorId: '1',
        gameId: '2'
    },
    {
        id: '2',
        rating: 8,
        content: 'It was pretty fun but very challenging',
        authorId: '2',
        gameId: '1'
    },

    {
        id: '3',
        rating: 7.6,
        content: 'It was pretty fun but very nice',
        authorId: '2',
        gameId: '1'
    }


];

export let authors = [
    {
        id: '1',
        name: 'MarioFan123',
        verified: true
    },
    {
        id: '2',
        name: 'ZeldaPro',
        verified: false
    }
];
