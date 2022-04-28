import { BigNumber } from '@ethersproject/bignumber'

declare global {
    export interface String {
        toBigNumber(decimals: number): BigNumber
    }
}
