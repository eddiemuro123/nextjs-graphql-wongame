import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'

import filterItemsMock from 'components/ExploreSidebar/mock'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { formatPrice } from 'utils/formatters/price'

const GamesPage = (props: GamesTemplateProps) => {
  return <GamesTemplate {...props} />
}

export default GamesPage

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: game?.cover?.url ?? 'img/img_game_fallback.png',
        slug: game.slug,
        price: formatPrice(game.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
