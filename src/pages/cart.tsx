import Cart, { CartProps } from 'templates/Cart'

import gamesMock from 'components/GameCardSlider/mock'
import cardsMock from 'components/PaymentOptions/mock'
import highLightMock from 'components/Highlight/mock'

const CartPage = (props: CartProps) => {
  return <Cart {...props} />
}

export default CartPage

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighLight: highLightMock,
      items: gamesMock.slice(0, 2),
      total: 'R$ 470,00',
      cards: cardsMock
    }
  }
}
