import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      background: ${theme.colors.white};
      padding: ${theme.spacings.medium};
      color: ${theme.colors.black};
    `}

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.white};
      margin: ${theme.spacings.xsmall} 0;

      ${HeadingStyles.wrapperModifiers.lineLeft(theme, 'secondary')};
      ${media.greaterThan('medium')`
        color: ${theme.colors.black};
      `}
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
    }
    a {
      color: ${theme.colors.primary};
    }
    img {
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }
    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
