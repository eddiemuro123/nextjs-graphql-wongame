import Link from 'next/link'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

import * as S from './styles'

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link isActive={activeLink === '/profile/me'} title="Meu Perfil">
          <AccountCircle size={24} />
          <span>Meu perfil</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref>
        <S.Link isActive={activeLink === '/profile/cards'} title="Meus cartões">
          <CreditCard size={24} />
          <span>Meus cartões</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref>
        <S.Link
          isActive={activeLink === '/profile/orders'}
          title="Minhas compras"
        >
          <FormatListBulleted size={24} />
          <span>Minhas compras</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link>
          <ExitToApp size={24} />
          <span>Sair</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}

export default ProfileMenu
