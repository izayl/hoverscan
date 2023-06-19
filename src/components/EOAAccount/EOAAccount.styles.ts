import { tv } from 'tailwind-variants'

export const eoaSlots = tv({
  slots: {
    resolvedName: 'rounded-xl py-0.5 px-2 font-medium text-sm bg-gray-100 cursor-pointer flex items-center gap-1',
    lens: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500',
    addressText: 'text-xs font-medium text-[#444] break-all',
  },
})
