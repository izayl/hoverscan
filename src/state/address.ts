import { atom } from 'jotai'
import type { Address } from 'viem'

export const addressAtom = atom<Address>('0x')
