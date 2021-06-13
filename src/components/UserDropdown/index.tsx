import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

import Link from 'next/link'

import Dropdown from 'components/Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link title="Meu perfil">
          <AccountCircle />
          <span>Meu perfil</span>
        </S.Link>
      </Link>
      <Link href="/wishlist" passHref>
        <S.Link title="Lista de desejos">
          <FavoriteBorder />
          <span>Lista de desejos</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link title="Sair">
          <ExitToApp />
          <span>Sair</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
