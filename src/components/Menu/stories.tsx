import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

import { MenuProps } from './index'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
}
