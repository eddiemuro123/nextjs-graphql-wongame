import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="primary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large">
        Adicionar ao carrinho
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Lista de desejos
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
