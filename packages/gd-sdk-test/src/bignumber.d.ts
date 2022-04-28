/// <reference path="./bootstrap.ts"/>
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { Fraction } from 'entities/Fraction'

declare module '@ethersproject/bignumber' {
    export interface BigNumber {
        muldiv(multiplier: BigNumberish, divisor: BigNumberish): BigNumber
        toFixed(decimals: BigNumberish): string
        toFraction(decimals: BigNumberish, base: BigNumberish): Fraction
    }
}