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
      My orders
    </Heading>

    {items?.length ? (
      items.map((item) => <GameItem key={item.downloadLink!} {...item} />)
    ) : (
      <Empty
        title="You haven't made a purchase yet."
        description="Visit our library and explore amazing games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrderList
