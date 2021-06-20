import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample-game',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
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
export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {}, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
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
