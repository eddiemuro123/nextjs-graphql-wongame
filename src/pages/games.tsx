import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

const GamesPage = (props: GamesTemplateProps) => {
  return <GamesTemplate {...props} />
}

export default GamesPage

export async function getServerSideProps() {
  return {
    props: {
      games: []
    }
  }
}
