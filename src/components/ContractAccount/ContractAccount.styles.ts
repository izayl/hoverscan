import { tv } from 'tailwind-variants'

export const contractAccountSlots = tv({
  slots: {
    tag: 'rounded-xl py-0.5 px-2 text-gray-800 text-xs font-medium border border-slate-100 dark:text-gray-300 dark:border-slate-700',
    metaInfoGroup: 'flex flex-row w-full',
    metaInfoItem: `
      inline-flex
      grow
      items-center justify-center
      border border-slate-100 rounded-md py-1 cursor-pointer
      transition-colors duration-200 ease-in-out
      hover:bg-slate-100 
      dark:border-slate-700
      dark:hover:bg-slate-700
      dark:text-gray-300
      text-xs
    `,
  },
})

// export const ContractName = styled('span', {
//   fontWeight: 500,
// })

// export const Tag = styled('span', {
//   borderRadius: 12,
//   py: 3,
//   px: 9,
//   backgroundColor: '$bg0',
//   fontWeight: 500,
//   fontSize: 12,
//   border: '1px solid $bg1',
// })

// export const MetaInfoGroup = styled('div', {
//   display: 'flex',
//   flexDirection: 'row',
//   width: '100%',
// })

// export const MetaInfoItem = styled('div', {
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   border: '1px solid $bg1',
//   flexGrow: 1,
//   py: 4,
//   cursor: 'pointer',
//   willChange: 'background-color',
//   transition: 'background-color 0.2s ease-in-out',

//   '&:hover': {
//     backgroundColor: '$bg1',
//   },

//   '&:first-of-type': {
//     borderTopLeftRadius: 6,
//     borderBottomLeftRadius: 6,
//     borderRight: 'none',
//   },
//   '&:last-of-type': {
//     borderTopRightRadius: 6,
//     borderBottomRightRadius: 6,
//     borderLeft: 'none',
//   },
// })
