import { Container } from 'components/Container'
import Empty from 'components/Empty'
import Base from 'templates/Base'

export default function Page404() {
  return (
    <Base>
      <Container>
        <Empty
          title="Ooppss..."
          description="A página que você procura ainda não existe."
          hasLink
        />
      </Container>
    </Base>
  )
}
