import { Story, Meta } from '@storybook/react'
import { SharedUi, SharedUiProps } from '.'

export default {
  title: 'Components/SharedUi',
  component: SharedUi
} as Meta

export const Default: Story<SharedUiProps> = (args) => <SharedUi {...args} />
