import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Default: Story<ProfileMenuProps> = (args) => <ProfileMenu {...args}/>
