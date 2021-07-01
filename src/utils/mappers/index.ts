import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
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
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  if (!games) return []
  return games.map((game) => ({
    id: game.id,
    title: game.name,
    slug: game.slug,
    developer: game.developers[0].name,
    img: game.cover?.url ?? 'img/img_game_fallback.png',
    price: game.price
  }))
}

export const highlightMapper = (
  highlight: QueryHome_sections_freeGames_highlight | null | undefined
) => {
  if (!highlight) return null
  return (
    highlight && {
      title: highlight?.title,
      subtitle: highlight?.subtitle,
      backgroundImage: highlight?.background?.url,
      buttonLabel: highlight?.buttonLabel,
      buttonLink: highlight?.buttonLink,
      floatImage: highlight?.floatImage?.url ?? '',
      alignment: highlight?.alignment
    }
  )
}
