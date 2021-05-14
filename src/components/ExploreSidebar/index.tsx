import * as S from './styles'
import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'

const ExploreSidebar = () => (
  <S.Wrapper>
    <Heading lineBottom lineColor="secondary" size="small">
      Preço
    </Heading>
    <Checkbox name="abaixo-50" label="Abaixo de R$50" labelFor="abaixo-50" />
    <Checkbox name="abaixo-100" label="Abaixo de R$100" labelFor="abaixo-100" />
    <Checkbox name="abaixo-150" label="Abaixo de R$150" labelFor="abaixo-150" />
    <Checkbox name="abaixo-200" label="Abaixo de R$200" labelFor="abaixo-200" />
    <Checkbox name="gratuito" label="Gratuito" labelFor="gratuito" />
    <Checkbox name="em-desconto" label="Em desconto" labelFor="em-desconto" />

    <Heading lineBottom lineColor="secondary" size="small">
      Filtrar por
    </Heading>

    <Radio
      type="radio"
      id="menor-para-maior"
      name="filtrar-por"
      label="Menor para maior"
      labelFor="menor-para-maior"
      value="menor-para-maior"
    />

    <Radio
      id="maior-para-menor"
      name="filtrar-por"
      label="Maior para menor"
      labelFor="maior-para-menor"
      value="maior-para-menor"
    />

    <Heading lineBottom lineColor="secondary" size="small">
      Sistema
    </Heading>
    <Checkbox name="windows" label="Windows" labelFor="windows" />
    <Checkbox name="mac" label="MAC" labelFor="mac" />
    <Checkbox name="Linux" label="Linux" labelFor="linux" />

    <Heading lineBottom lineColor="secondary" size="small">
      Gênero
    </Heading>

    <Checkbox name="acao" label="Ação" labelFor="acao" />
    <Checkbox name="aventura" label="Aventura" labelFor="aventura" />
    <Checkbox name="fps" label="FPS" labelFor="fps" />
    <Checkbox name="mmorpg" label="MMORPG" labelFor="mmorpg" />

    <Button fullWidth size="medium">
      Filtrar
    </Button>
  </S.Wrapper>
)

export default ExploreSidebar
