import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'
import * as S from './styles'

export type OrderListProps = {
  items?: GameItemProps[]
}

const OrderList = ({ items }: OrderListProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black" lineColor="primary" size="small">
      Minhas compras
    </Heading>

    {items?.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="Você ainda não efetuou uma compra"
        description="Visite nossa biblioteca e explores incríveis jogos e ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrderList
