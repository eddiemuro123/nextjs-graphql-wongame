import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const CartPage = (props: CartProps) => {
  return <Cart {...props} />
}

export default CartPage

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighLight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      cartTitle: data.recommended?.section?.title,
      items: gamesMock.slice(0, 2),
      total: 'R$ 470,00',
      cards: cardsMock
    }
  }
}
