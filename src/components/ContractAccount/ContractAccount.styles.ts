import { styled } from '~/stitches.config'

export const ContractName = styled('span', {
  fontWeight: 500,
})

export const Tag = styled('span', {
  borderRadius: 12,
  py: 3,
  px: 9,
  backgroundColor: '$bg0',
  fontWeight: 500,
  fontSize: 12,
  border: '1px solid $bg1',
})

export const MetaInfoGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})

export const MetaInfoItem = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $bg1',
  flexGrow: 1,
  py: 4,
  cursor: 'pointer',
  willChange: 'background-color',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$bg1',
  },

  '&:first-of-type': {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderRight: 'none',
  },
  '&:last-of-type': {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    borderLeft: 'none',
  },
})
