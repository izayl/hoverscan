import { tv } from 'tailwind-variants'
export const overview = tv({
  base: 'flex rounded p-3 gap-3 items-center cursor-pointer transition-all duration-200 ease-in-out hover:brightness-125',
})

export const overviewSlot = tv({
  slots: {
    overview: 'flex rounded-md p-3 gap-3 items-center cursor-pointer transition-all duration-200 ease-in-out hover:brightness-125 w-full',
    networkImage: 'inline-block h-7 w-7 rounded-full',
    networkName: 'font-semibold text-sm text-black',
    overviewInfo: 'font-normal text-xs text-gray-600',
    asset: "after:content-['•'] after:mx-1",
    txn: '',
    indicatorRight: 'ml-auto',
  },
})
