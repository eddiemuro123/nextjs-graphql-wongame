import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={handleToggle}>{title}</S.Title>
      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={handleToggle} />
    </S.Wrapper>
  )
}

export default Dropdown
