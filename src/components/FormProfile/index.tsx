import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

import * as S from './styles'

const FormProfile = () => (
  <S.Wrapper>
    <Heading size="small" color="black" lineBottom lineColor="primary">
      My profile
    </Heading>

    <S.Form>
      <TextField name="name" placeholder="Name" label="Name" />
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
        name="password"
        placeholder="Your Password"
        label="Password"
      />
      <TextField
        type="password"
        name="new_password"
        placeholder="New Password"
        label="New Password"
      />

      <Button size="large">Save</Button>
    </S.Form>
  </S.Wrapper>
)

export default FormProfile
