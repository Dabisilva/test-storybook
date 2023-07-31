import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@dabi-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
  },
}

export const DisabledPrimaryButton: StoryObj<ButtonProps> = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    variant: 'secondary',
  },
}

export const DisabledSecondaryButton: StoryObj<ButtonProps> = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    size: 'sm',
    variant: 'tertiary',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    size: 'sm',
  },
}

export const RadioMedium: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    radio: 'md',
  },
}

export const RadioLarge: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    radio: 'lg',
  },
}
export const RadioFull: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    variant: 'primary',
    radio: 'full',
  },
}
export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight weight="bold" />
      </>
    ),
    variant: 'primary',
  },
}
