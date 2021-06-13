import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="Ooppss..."
          description="Esta página ainda não existe. Visite nossa biblioteca e explores incríveis jogos e ofertas."
          hasLink
        />
      </Container>
    </Base>
  )
}
