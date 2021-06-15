import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { HighLightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighLight: HighLightProps
}

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighLight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard {...game} key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title="Maybe you like"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
