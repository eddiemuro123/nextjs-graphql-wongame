import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesItemsMock from 'components/GameCardSlider/mock'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

const GamesPage = (props: GamesTemplateProps) => {
  return <GamesTemplate {...props} />
}

export default GamesPage

export async function getServerSideProps() {
  return {
    props: {
      games: gamesItemsMock,
      filterItems: filterItemsMock
    }
  }
}
