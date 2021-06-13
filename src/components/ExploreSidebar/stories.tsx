import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSidebar, { ExploreSidebarProps } from '.'
import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar
    {...args}
    initialValues={{ windows: true, filtrar_por: 'menor-para-maior' }}
  />
)
