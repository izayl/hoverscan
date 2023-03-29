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

export const Card = styled('div', {
  p: 16,
  display: 'flex',
  flexDirection: 'column',
  background: '$bg0',
  gap: '$container',
  minWidth: 340,
  maxWidth: 400,
  boxShadow: '0px 3.2px 7.2px rgba(0, 0, 0, 0.132), 0px 0.6px 1.8px rgba(0, 0, 0, 0.108)',
  borderRadius: 6,

  fontFamily: '$sans',
})
