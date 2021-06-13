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
              <Button as="a">Comprar agora</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Seu carrinho está vazio"
        description="Visite nossa biblioteca e explores incríveis jogos e ofertas"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
