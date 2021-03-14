import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
    if (onCheck) onCheck(!checked)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
