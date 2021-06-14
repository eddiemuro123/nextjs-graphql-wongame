import Home, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import hightLightMock from 'components/Highlight/mock'

import { initializeApollo } from 'utils/apollo'

import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map((banner) => ({
        img: banner.image?.url,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon?.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        }),
        buttonLabel: banner.button?.label
      })),
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
