import React from 'react'
import { gdTheme } from '../../theme'
import { NativeBaseProvider } from 'native-base'
import {Button} from 'native-base'
import type {IButtonProps} from 'native-base'

interface GdButtonProps extends IButtonProps {
  onClick?: () => void,
  buttonText: string
}

export const GdButton = ({ onClick, buttonText}:GdButtonProps) => {
  return <Button>{buttonText}</Button>
}

// export const GdButton = ({ onClick, buttonText}:Props) => {
//   return <NativeBaseProvider theme={gdTheme}>
//       <Button onPress={onClick}>{buttonText}</Button>
//     </NativeBaseProvider> 
// }

// export function GdButton2(props: Props):JSX.Element {
//   return <Button onPress={props.onClick}>{props.buttonText}</Button>
// }


 