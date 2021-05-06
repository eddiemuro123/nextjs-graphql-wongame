import styled, { css } from 'styled-components'

import * as GameItemStyles from 'components/GameItem/styles'
import * as EmptyStyles from 'components/Empty/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${GameItemStyles.Wrapper} {
      &:last-child {
        border-bottom: 0;
      }
    }

    ${EmptyStyles.Description} {
      color: ${theme.colors.black};
    }
  `}
`
