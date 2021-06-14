import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames {
    games {
      name
      slug
      cover {
        url
      }
      developers {
        name
      }
      price
    }
  }
`
