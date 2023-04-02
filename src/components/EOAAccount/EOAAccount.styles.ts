import { styled } from '~/stitches.config'

export const ResolvedName = styled('div', {
  borderRadius: 12,
  py: 3,
  px: 9,
  backgroundColor: '$bg1',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: 1.4,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: 4,
})

export const LensGradientText = styled('span', {
  backgroundImage: 'linear-gradient(to right,#7c3aed,#db2777)',
  backgroundClip: 'text',
  color: 'transparent',
})

export const AddressText = styled('div', {
  overflowWrap: 'anywhere',
  fontSize: 12,
  lineHeight: 1.4,
  color: '#444',
})
