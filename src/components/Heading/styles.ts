import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 5rem;
      border: 0.3rem solid ${theme.colors.primary};
      bottom: -1rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
