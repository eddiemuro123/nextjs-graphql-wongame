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
        <S.BannerContent>
          <Logo id="banner" />

          <div>
            <Heading color="white" size="huge">
              All your favorite games in one place
            </Heading>

            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              plataform.
            </S.Subtitle>
          </div>

          <S.Footer>
            Won Games {getCurrentYear} © Todos os Direitos Reservados
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo color="black" size="large" id="content" />
          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
