import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@dabi-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],

  args: {
    children: (
      <>
        <Text>Testando elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
