import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighLightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlide from 'components/BannerSlide'
import Base from 'templates/Base'

import * as S from './styles'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighLightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighLightProps
  freeGames: GameCardProps[]
  freeHighlight: HighLightProps
  newGamesTitle: string
  mostPopularGamesTitle: string
  upcomingGamesTitle: string
  freeGamesTitle: string
}
const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  freeGames,
  freeHighlight,
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlide items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcomingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default Home
