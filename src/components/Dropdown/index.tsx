import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Content>{children}</S.Content>
  </S.Wrapper>
)

export default Dropdown
