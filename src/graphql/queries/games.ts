import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!, $start: Int) {
    games(limit: $limit, start: $start) {
      ...GameFragment
    }
  }

  ${GameFragment}
`

export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      name
      short_description
      description
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      price
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(QUERY_GAMES, options)
}
