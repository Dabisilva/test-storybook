import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',

  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',

  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  transition: 'all 300ms',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$green500',

        '&:not(:disabledd):hover': {
          backgroundColor: '$green300',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$green300',
        border: '2px solid $green500',

        '&:not(:disabledd):hover': {
          backgroundColor: '$green500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabledd):hover': {
          color: '$white',
        },
      },
    },

    size: {
      sm: {
        height: 32,
      },
      md: {
        height: 46,
      },
    },

    radio: {
      sm: {
        borderRadius: '$sm',
      },
      md: {
        borderRadius: '$md',
      },
      lg: {
        borderRadius: '$lg',
      },
      full: {
        borderRadius: '$full',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    radio: 'sm',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
