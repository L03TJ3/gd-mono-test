import React, { ReactNode } from 'react'
// 1. Import the extendTheme function
import { extendTheme, NativeBaseProvider } from 'native-base';

// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    'gdBlue': '#0094ec',
    'gdBlueLight': 'rgba(0, 176, 255, 0.1)',
    'gdGreen': 'rgb(0, 195, 174)',
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};


const gdTheme = extendTheme({ 
  colors: newColorTheme,
  components: {
    Button: {
      baseStyle: {
        backgroundColor: newColorTheme.brand.gdBlue,
        width: '150px',
        height: '50px',
        padding: '10px 20px 10px 20px',
        transition: 'background 0.22s',
        color: 'white',
        border: '1px solid black',
        borderRadius: '10px',
        _hover: {
          backgroundColor: newColorTheme.brand.gdBlueLight,
          transition: 'background 0.22s',
          cursor: 'pointer'
        }
      }
    }
  } 
});

// just a test - doesnt work
export function GdThemeProvider(childComponent: JSX.Element) {
  return (
    <NativeBaseProvider theme={gdTheme}>
      {childComponent}
    </NativeBaseProvider>
  )
}
// 3. Pass the `theme` prop to the `NativeBaseProvider`
export default gdTheme 
 