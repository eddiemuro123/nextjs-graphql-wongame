import CardList, { CardListProps } from 'components/CardList'
import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'

const Cards = ({ cards }: CardListProps) => {
  return (
    <Profile>
      <CardList cards={cards} />
    </Profile>
  )
}

export default Cards

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
