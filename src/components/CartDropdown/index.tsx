import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'
import CartIcon from 'components/CartIcon'

import * as S from './styles'
import CartList from 'components/CartList'

export type CartDropdownProps = {
  items: GameItemProps[]
  total: string
}

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown
