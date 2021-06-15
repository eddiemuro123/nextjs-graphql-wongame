import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Strangeland - Official Soundtrack',
          slug: 'strangeland-official-soundtrack',
          cover: {
            url: 'https://res.cloudinary.com/ddnxfzdze/image/upload/v1623699186/strangeland_official_soundtrack_5c3f024f82.jpg'
          },
          developers: [{ name: 'Wormwood Studios', __typename: 'Developer' }],
          price: 6.49,
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
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
      ]
    }
  }
}
