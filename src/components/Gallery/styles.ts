import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }
    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;

    > svg {
      border-radius: 100%;
      transition: all 0.3s ease;
      padding: 6px;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`
