import { styled } from '~/stitches.config'

export const SyncButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  color: '#000',
  fontSize: 14,
  lineHeight: '20px',
  border: '1px solid #D7DCE5',
  borderRadius: 6,
  px: 6,
  py: 3,

  '&::before': {
    content: '',
    width: 8,
    height: 8,
    borderRadius: '50%',
  },

  variants: {
    syncing: {
      true: {
        cursor: 'wait',
        '&::before': {
          backgroundColor: '#F2C94C',
        },
      },
      false: {
        cursor: 'pointer',
        '&::before': {
          backgroundColor: '#27AE60',
        },
      },
    },
  },

  defaultVariants: {
    syncing: true,
  },
})
