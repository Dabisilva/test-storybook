import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@dabi-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },

  parameters: {
    docs: {
      description: {
        story:
          'By deafalt heading always will be `H2`, but you can change that with the `as` prop.',
      },
    },
  },
}
