import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import { useQueryGames } from 'graphql/queries/games'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  if (!data) return <p>Loading...</p>

  function handleShowMore() {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          items={filterItems}
          onFilter={() => console.log('Filtro')}
        />
        <section>
          <Grid>
            {data?.games.map((game) => (
              <GameCard
                key={game.slug}
                title={game.name}
                slug={game.slug}
                developer={game.developers[0].name}
                img={String(game.cover?.url)}
                price={game.price}
              />
            ))}
          </Grid>

          {!loading && data?.games.length && (
            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </S.ShowMore>
          )}
        </section>
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
