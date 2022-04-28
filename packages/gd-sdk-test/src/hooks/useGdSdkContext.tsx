import React, {createContext} from 'react'
import Web3 from 'web3'

export interface GdSdkContextInterface {
  web3: Web3 | null,
  activeNetwork: string
}

const GdSdkContext = createContext<GdSdkContextInterface>({
  web3: null,
  activeNetwork: ''
})

export default GdSdkContext