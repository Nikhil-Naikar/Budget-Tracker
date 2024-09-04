'use client'

import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: '#FFDBB5'
    }
  })
}

const colors = {
  black: '#000000',
  light_brown: '#6C4E31',
  dark_brown: '#603F26'
}


const theme = extendTheme({styles, colors})
export default theme