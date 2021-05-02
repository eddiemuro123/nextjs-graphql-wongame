import { Apple, Windows, Linux } from 'styled-icons/fa-brands'

import Heading from '../Heading'
import MediaMatch from '../MediaMatch'
import * as S from './styles'

type Platforms = 'windows' | 'linux' | 'mac'
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Platforms[]
  releaseDate: string
  rating: Rating
  genres: string[]
  publisher: string
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  rating,
  genres,
  publisher
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={23} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Detalhes do jogo
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Desenvolvedora</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Data de lançamento</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('pt-BR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataformas</S.Label>
          <S.IconsWrapper>
            {platforms?.map((icon: Platforms) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Editora</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Classificação</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Gêneros</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
