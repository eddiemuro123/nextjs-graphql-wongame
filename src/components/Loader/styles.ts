import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} auto;
  `}
`
