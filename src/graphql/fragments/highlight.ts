import { gql } from '@apollo/client'

export const HighlightFragment = gql`
  fragment HightlightFragemnt on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    alignment
    buttonLink
    buttonLabel
  }
`
