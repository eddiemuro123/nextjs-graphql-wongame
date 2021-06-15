import { Story, Meta } from '@storybook/react/types-6-0'
import Loader from '.'

export default {
  title: 'Loader',
  component: Loader
} as Meta

export const Default: Story = () => <Loader />
