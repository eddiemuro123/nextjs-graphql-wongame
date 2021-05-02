import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighLightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighLightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighLight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Lista de desejos
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard {...game} key={`wishlist-${index}`} />
        ))}
      </Grid>
    </Container>

    <Showcase
      title="Talvez você se interesse"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
