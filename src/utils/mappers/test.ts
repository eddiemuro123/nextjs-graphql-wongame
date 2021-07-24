import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGames_highlight
} from 'graphql/generated/QueryHome'
import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'Ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: '/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLink: 'button link',
        ...(banner.ribbon && {
          ribbon: 'Ribbon text',
          ribbonColor: 'primary',
          ribbonSize: 'small'
        }),
        buttonLabel: 'button label'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: '/image.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return an empty object if there are no highlights', () => {
    expect(highlightMapper(null)).toStrictEqual(null)
  })

  it('should return the right format when mapped', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        url: '/image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: {
        url: '/image.jpg'
      }
    } as QueryHome_sections_newGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      backgroundImage: '/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      floatImage: '/image.jpg',
      alignment: 'right'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const game = {
      id: '1',
      cover: {
        url: 'image.jpg'
      },
      name: 'game',
      price: 10
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: 'image.jpg',
        title: 'game',
        price: '$10.00'
      }
    ])
  })
})
