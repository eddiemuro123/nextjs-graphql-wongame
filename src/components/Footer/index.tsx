import Link from 'next/link'

import Heading from '../Heading/index'
import Logo from '../Logo/index'
import * as S from './styles'

const Footer = () => {
  const getCurrentYear = new Date().getFullYear()

  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact us
          </Heading>

          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>

          <nav aria-labelledby="footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/games">
              <a>Store</a>
            </Link>
            <Link href="/search">
              <a>Search</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer-contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>

      <S.Copyright>
        Won Games {getCurrentYear} © All Rights Reserved.
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
