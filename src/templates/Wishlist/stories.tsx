import { Story, Meta } from '@storybook/react/types-6-0'
import Wishlist from '.'

export default {
  title: 'Wishlist',
  component: Wishlist
} as Meta

export const Default: Story = () => <Wishlist />
