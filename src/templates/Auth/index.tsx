import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  const getCurrentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Logo />

        <Heading color="white">All your favorite games in one place</Heading>

        <S.Subtitle>
          <strong>WON</strong> is the best and most complete gaming plataform.
        </S.Subtitle>

        <S.Footer>
          Won Games {getCurrentYear} © Todos os Direitos Reservados
        </S.Footer>
      </S.BannerBlock>

      <S.Content>
        <Logo color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
