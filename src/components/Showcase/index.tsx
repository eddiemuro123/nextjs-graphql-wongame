import GameCardSlider, { GameCardSliderProps } from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighLightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighLightProps
  games?: GameCardProps[]
} & Pick<GameCardSliderProps, 'color'>

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase
