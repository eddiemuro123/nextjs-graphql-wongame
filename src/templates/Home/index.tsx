import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighLightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import BannerSlide from 'components/BannerSlide'
import Base from 'templates/Base'

import * as S from './styles'
import Showcase from 'components/Showcase'

export type HomeTemplateProps = {
  data: any
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
      <Showcase title="Novos" games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title="Mais Populares"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Chegando em breve" games={upcommingGames} />
      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Gratuitos" highlight={freeHighlight} games={freeGames} />
  </Base>
)

export default Home
