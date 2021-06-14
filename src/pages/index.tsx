import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightLightMock from 'components/Highlight/mock'
import { gql, useQuery } from '@apollo/client'

export default function Index(props: HomeTemplateProps) {
  const { data, loading, error } = useQuery(gql`
    query getGames {
      games {
        name
      }
    }
  `)

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
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
