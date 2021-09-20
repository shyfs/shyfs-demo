import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import React from 'react'
import { theme } from '../../configs'

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ initialColorMode: 'dark' }}>
        {children}
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default ThemeProvider
