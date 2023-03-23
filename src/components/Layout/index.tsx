import { styled } from '@stitches/react'

export const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    gap: {
      true: {
        gap: '$row',
      },
      false: {},
    },
  },

  defaultVariants: {
    align: 'start',
  },
})

export const Column = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
    gap: {
      true: {
        gap: '$column',
      },
      false: {},
    },
  },
})

export const Text = styled('div', {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.5,
})
