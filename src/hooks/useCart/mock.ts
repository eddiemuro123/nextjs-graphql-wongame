import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { id: ['1', '2'] } }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'sample description',
          price: 10.5,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        },
        {
          id: '2',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'sample description',
          price: 10.5,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: '/sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const cartItems = [
  {
    id: '1',
    img: '/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  },
  {
    id: '2',
    img: '/sample-game.jpg',
    price: '$10.50',
    title: 'Sample Game'
  }
]
