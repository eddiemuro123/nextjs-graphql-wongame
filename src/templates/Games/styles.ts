import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    display: grid;

    ${media.greaterThan('medium')`
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`
export const ShowMore = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.medium};
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`
