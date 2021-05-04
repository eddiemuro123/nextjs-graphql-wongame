import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading size="small" color="black" lineBottom lineColor="primary">
      Meu perfil
    </Heading>

    <S.Form>
      <TextField
        name="nome"
        placeholder="Nome"
        label="Nome"
      />
      <TextField
        name="email"
        type="email"
        placeholder="Email"
        label="Email" 
        initialValue="caioamfr@gmail.com"
        disabled
      />
      <TextField
        type="password"
        name="senha"
        placeholder="Digite sua senha"
        label="Senha"
      />
      <TextField
        type="password"
        name="new_password"
        placeholder="Nova senha"
        label="Nova senha"
      />

      <Button size="large">Salvar</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
