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
        Lista de desejos
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard {...game} key={`wishlist-${index}`} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Sua lista de desejos está vazia"
          description="Jogos adicionados na sua lista de desejos aparecerão aqui"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title="Talvez você se interesse"
      games={recommendedGames}
      highlight={recommendedHighLight}
    />
  </Base>
)

export default Wishlist
