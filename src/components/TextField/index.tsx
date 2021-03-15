import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input type="text" onChange={onChange} value={value} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}

export default TextField
