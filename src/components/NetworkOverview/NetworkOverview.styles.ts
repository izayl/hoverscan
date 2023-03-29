import { ChevronRight } from '../icons'
import { styled } from '~/stitches.config'

export const StyledOverview = styled('div', {
  display: 'flex',
  borderRadius: 8,
  p: 12,
  gap: 12,
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    filter: 'brightness(1.25)',
  },
})

export const NetworkImage = styled('img', {
  size: 28,
  borderRadius: '50%',
})

export const NetworkName = styled('span', {
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '20px',
  color: '#000',
})

export const OverviewInfo = styled('div', {
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: '14px',
  color: '#666',

  '& span': {
    '&::after': {
      content: '•',
      mx: 4,
    },
  },
  '& span:last-of-type': {
    '&::after': {
      content: '',
    },
  },
})

export const IndicatorRight = styled(ChevronRight, {
  ml: 'auto',
})
