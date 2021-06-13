import Base from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'

import * as S from './styles'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => (
  <Base>
    <S.Main>
      <ExploreSidebar
        items={filterItems}
        onFilter={() => console.log('Filtro')}
      />

      <section>
        <Grid>
          {games.map((item) => (
            <GameCard key={item.title} {...item} />
          ))}
        </Grid>

        <S.ShowMore role="button" onClick={() => console.log('Mostrar mais')}>
          <p>Mostrar mais</p>
          <ArrowDown size={35} />
        </S.ShowMore>
      </section>
    </S.Main>
  </Base>
)

export default GamesTemplate
