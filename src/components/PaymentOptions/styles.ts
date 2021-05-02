import { tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.small}
      ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`

export const CardsList = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.small} ${theme.spacings.small}
      ${theme.spacings.small};
  `}
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`
