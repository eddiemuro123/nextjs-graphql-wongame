import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart'

import * as S from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && (
      <S.Badge aria-label="Itens do carrinho">{quantity}</S.Badge>
    )}
    <ShoppingCart aria-label="Carrinho de compras" />
  </S.Wrapper>
)

export default CartIcon
