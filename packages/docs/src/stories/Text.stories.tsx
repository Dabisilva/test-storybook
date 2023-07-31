import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@dabi-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],

  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis maxime iste cumque, porro libero non laudantium suscipit autem doloremque hic eos, aut architecto illo. Quo impedit consectetur iusto cumque nulla.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const StrongText: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
