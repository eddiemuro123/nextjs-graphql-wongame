import Home, { HomeTemplateProps } from 'templates/Home'

import bannersMock from 'components/BannerSlide/mock'
import gamesMock from 'components/GameCardSlider/mock'
import hightLightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
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
