import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightLightMock from 'components/Highlight/mock'
import { gql } from '@apollo/client'
import { initializeApollo } from 'utils/apollo'

const GET_GAMES = gql`
  query getGames {
    games {
      name
    }
  }
`

export default function Index(props: HomeTemplateProps) {
  if (props.data) console.log(props.data)
  return <Home {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      data,
      initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: hightLightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: hightLightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: hightLightMock
    }
  }
}
