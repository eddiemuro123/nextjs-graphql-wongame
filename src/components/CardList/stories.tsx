import { Story, Meta } from '@storybook/react/types-6-0'
import CardList, { CardListProps } from '.'

import cardMock from 'components/PaymentOptions/mock'

export default {
  title: 'Profile/CardList',
  component: CardList,
  args: {
    cards: cardMock
  }
} as Meta

export const Default: Story<CardListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: '0 auto' }}>
    <CardList {...args} />
  </div>
)
