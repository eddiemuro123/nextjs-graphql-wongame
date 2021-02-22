import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HightLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Red Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HightLightProps> = (args) => <Highlight {...args} />
