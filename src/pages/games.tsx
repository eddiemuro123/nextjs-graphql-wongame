import filterItemsMock from 'components/ExploreSidebar/mock'
import { QUERY_GAMES } from 'graphql/queries/games'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { initializeApollo } from 'utils/apollo'

const GamesPage = (props: GamesTemplateProps) => {
  return <GamesTemplate {...props} />
}

export default GamesPage

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({ query: QUERY_GAMES })

  return {
    props: {
      revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: game?.cover?.url ?? {},
        price: new Intl.NumberFormat('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }).format(game.price)
      })),
      filterItems: filterItemsMock
    }
  }
}
