import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'

import Link from 'next/link'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

        <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>

          {hasButton && (
            <Link href="/cart">
              <Button as="a">Buy now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Visit our library and explore amazing games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
