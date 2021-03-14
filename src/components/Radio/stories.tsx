import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <Radio
    label="primeiro"
    labelFor="primeiro"
    id="primeiro"
    name="nome"
    value="primeiro"
    defaultChecked
    {...args}
  />
)
