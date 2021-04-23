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
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighLightProps
}
const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlide items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcommingGames} />
      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
