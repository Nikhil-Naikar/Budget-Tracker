'use client'

import { extendTheme, type StyleFunctionProps } from '@chakra-ui/react'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: '#FFDBB5'
    }
  })
}




const theme = extendTheme({styles})
export default theme