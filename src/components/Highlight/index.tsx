import Button from '../Button/index'
import * as S from './styles'

export type HightLightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage
}: HightLightProps) => (
  <S.Wrapper backgroundImage={backgroundImage}>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
