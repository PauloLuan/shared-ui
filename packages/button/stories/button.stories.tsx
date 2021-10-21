import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../src'

export default {
  title: 'Button',
  component: Button,
  args: {
    size: 'md',
    disabled: false,
    active: false
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    }
  }
} as Meta

const Buttons = (props: ButtonProps) => {
  const variants = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark',
    'link'
  ] as const
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {variants.map((variant) => (
        <div key={variant}>
          <Button variant={variant} style={{ marginRight: '1rem' }} {...props}>
            {variant}
          </Button>
          <Button variant={`outline-${variant}`} {...props}>
            {`outline ${variant}`}
          </Button>
        </div>
      ))}
    </div>
  )
}

export const Default: Story<ButtonProps> = (args) => <Buttons {...args} />

export const Link: Story<ButtonProps> = (args) => <Button {...args} />
Link.args = {
  variant: 'link',
  href: 'https://www.tomorrowtides.com/fifa-world-cup-qatar-20222.html',
  target: '_blank'
}
