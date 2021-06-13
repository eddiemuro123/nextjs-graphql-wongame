import { useState } from 'react'
import Link from 'next/link'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from '../Button/index'
import Logo from '../Logo/index'
import MediaMatch from '../MediaMatch/index'
import * as S from './styles'
import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'
import CartIcon from 'components/CartIcon'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir Menu" />
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Início</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Biblioteca</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Pesquisar" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </S.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Entrar</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Fechar Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Início</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Biblioteca</S.MenuLink>
          </Link>

          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <S.MenuLink>Minha Conta</S.MenuLink>
              </Link>
              <Link href="/wishlist" passHref>
                <S.MenuLink>Lista de desejos</S.MenuLink>
              </Link>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Entrar
              </Button>
            </Link>
            <span>ou</span>

            <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Registrar-se</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
