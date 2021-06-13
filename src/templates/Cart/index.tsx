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
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighLight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayments = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Meu carrinho
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total!} />

            <PaymentOptions cards={cards!} handlePayment={handlePayments} />
          </S.Content>
        ) : (
          <Empty
            title="Seu carrinho está vazio"
            description="Visite nossa biblioteca e explores incríveis jogos e ofertas"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="Talvez você se interesse"
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  )
}

export default Cart
