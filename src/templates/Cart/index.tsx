import { CartListProps } from 'components/CartList'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighLightProps } from 'components/Highlight'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import CartList from 'components/CartList'
import Base from 'templates/Base'

import * as S from './styles'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Empty from 'components/Empty'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighLightProps
  cartTitle: string
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighLight,
  cartTitle,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayments = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total!} />

            <PaymentOptions cards={cards!} handlePayment={handlePayments} />
          </S.Content>
        ) : (
          <Empty
            title="You cart is empty"
            description="Visit our library and explore amazing games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={cartTitle}
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  )
}

export default Cart
