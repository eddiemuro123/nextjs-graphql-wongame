import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'

import Heading from 'components/Heading'
import { HighLightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighLightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighLight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Lista de desejos
      </Heading>
    </Container>

    <Showcase
      title="Talvez você se interesse"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
