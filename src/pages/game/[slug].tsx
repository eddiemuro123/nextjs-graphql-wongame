import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Game, { GameTemplateProps } from 'templates/Game'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'

import { formatPrice } from 'utils/formatters/price'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

const Index = (props: GameTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return <Game {...props} />
}

export default Index

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({ query: QUERY_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.games.length) {
    return {
      notFound: true
    }
  }

  const game = data.games[0]

  return {
    props: {
      revalidate: 60,
      cover: game.cover?.src ?? 'img/img_game_fallback.png',
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: image.src,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
